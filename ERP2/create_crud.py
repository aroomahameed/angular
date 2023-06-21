import sys
import os
import argparse
import fileinput

def singular(str):
    if str.endswith('ies'):
        return f'{str[0:-3]}y'
    elif str.endswith('xes'):
        return str[0:-2]
    elif str.endswith('sses'):
        return str[0:-2]
    elif str.endswith('es'):
        return str[0:-1]
    else:
        return str[0:-1]

BASE_DIR = 'src/app/features/'
STORE_DIR = 'src/app/features/store/'


ap = argparse.ArgumentParser()
ap.add_argument("-s", "--src", required=False,
   help="Source to copy the folder")
ap.add_argument("-store", "--store", required=False,
   help="Store Entity Name")
ap.add_argument("-ss", "--store_source", required=False,
   help="Store Entity To copy")


ap.add_argument("-d", "--dest", required=True,
   help="Destination of newly created component")

ap.add_argument("-m", "--module", required=True,
   help="Module of component")

args = vars(ap.parse_args())
if not args['src']:
    args['src'] = 'settings/currencies'
if not args['store']:
    args['store'] = args['dest']
if not args['store_source']:
    args['store_source'] = 'settings/currency'
src = BASE_DIR + args['src']
dest = BASE_DIR + args['dest']
module = BASE_DIR + args['module']
store = STORE_DIR + args['store']
store_source = STORE_DIR + args['store_source']

store = singular(store)

name = args["dest"].split("/")[-1]
singular = singular(name)

component = (f'{name.capitalize()}Component')

module_file_name = f'{module}/{args["module"]}.module.ts'

import_text = f'import {{ {component} }} from \'./{name}/{name}.component\''
store_import = f'import * as {singular} from \'{store}\''

duplicate_import = False
store_duplicate_import = False

with open(module_file_name, 'r') as src1:
    for line in src1.readlines():
        if line.startswith(import_text):
            duplicate_import = True
        if line.startswith(store_import):
            store_duplicate_import = True

if not duplicate_import:
    with open(module_file_name, 'rt') as src1:
        with open(module_file_name + '1', 'wt') as dest1:
            for line in src1.readlines():
                l = line
                if 'declarations' in line:
                    l = line.replace(']', f', {component}]')
                if line.startswith('//component imports'):
                    l = line.replace('//component imports', f'//component imports\n{import_text}')
                
                dest1.write(l)
    os.remove(module_file_name)
    os.rename(module_file_name +'1', module_file_name)

for_feature = f'    StoreModule.forFeature({singular}.{singular}FeatureKey, {singular}.reducer),'

if not store_duplicate_import:
    with open(module_file_name, 'rt') as src1:
        with open(module_file_name + '1', 'wt') as dest1:
            for line in src1.readlines():
                l = line
                if 'EffectsModule.forFeature' in line:
                    l = line.replace(']', f', {singular}.{singular.capitalize()}Effects]')
                if '//store for feature' in line:
                    l = line.replace('//store for feature', f'//store for feature\n{for_feature}')
                if line.startswith('//store imports'):
                    l = line.replace('//store imports', f'//store imports\n{store_import}')
                if "path: ''" in line:
                    l = line
                    l += f'      {{path: \'{name}\', component: {component}}},\n'
                dest1.write(l)
    os.remove(module_file_name)
    os.rename(module_file_name +'1', module_file_name)

    
if not os.path.exists(dest):
    os.mkdir(dest)

cname = dest + f'/{name}.component.ts'
html = dest + f'/{name}.component.html'
css = dest + f'/{name}.component.css'

files = []

files.append(css)
files.append(html)  
files.append(cname)

for f in zip(files, os.listdir(src)):
    with open(f[0], '+w') as dest1:
        srcadd = src +"/" + f[1]
        with open(srcadd, 'r') as src1:
            for line in src1.readlines():
                line = line.replace('settings', args['module'])
                line = line.replace('currency', singular)
                line = line.replace('Currency', singular.capitalize())
                line = line.replace('Currencies', name.capitalize())
                line = line.replace('currencies', name)
                dest1.write(line)

                

if not os.path.exists(store):
        os.mkdir(store)


model = f'{store}/{singular}.ts'
action = f'{store}/{singular}.actions.ts'
effect = f'{store}/{singular}.effects.ts'
reducer = f'{store}/{singular}.reducer.ts'
selector = f'{store}/{singular}.selectors.ts'
service = f'{store}/{singular}.service.ts'
index = f'{store}/index.ts'
files = []

files.append(action)
files.append(effect)
files.append(reducer)
files.append(selector)
files.append(service)
files.append(model)
files.append(index)


for f in zip(files, os.listdir(store_source)):
    with open(f[0], 'w') as dest:
        with open( store_source+ '/' + f[1], 'r') as src:
            for line in src.readlines():
                line = line.replace('currency', singular)
                line = line.replace('Currency', singular.capitalize())
                line = line.replace('Currencies', name.capitalize())
                line = line.replace('currencies', name)
                dest.write(line)
            





