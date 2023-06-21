import sys
import os
dirname = 'src/app/features/store'
to_copy = 'src/app/features/store/settings/currency'
args = sys.argv
if len(args) > 1:
    path = ''
    for a in args[1:]:
        path += '/'+a
    dirname += path
    
    if not os.path.exists(dirname):
        os.mkdir(dirname)

    
    main_filename = '/' + args[-1]
    model = dirname + main_filename + '.ts1'
    action = dirname + main_filename + '.actions.ts1'
    effect = dirname + main_filename + '.effects.ts1'
    reducer = dirname + main_filename + '.reducer.ts1'
    selector = dirname + main_filename + '.selectors.ts1'
    service = dirname + main_filename + '.service.ts1'
    index = dirname + '/index.ts1'
    files = []
    
    files.append(action)
    files.append(effect)
    files.append(reducer)
    files.append(selector)
    files.append(service)
    files.append(model)
    files.append(index)
    
    
    for f in zip(files, os.listdir(to_copy)):
        with open(f[0], '+w') as dest:
            with open(to_copy + '/' + f[1], 'r') as src:
                dest.writelines(src.readlines())
                

    for f in files:
        with open(f, 'rt') as src:
            with open(f[0:-1], 'wt') as dest:
                name = args[-1][0: len(args[-1]) -1] + 'ies' if args[-1].endswith('y') else args[-1] + 's'
                for line in src.readlines():
                    l = line.replace('currency', args[-1])
                    l = l.replace('Currency', args[-1].capitalize())
                    l = l.replace('Currencies', name.capitalize())
                    l = l.replace('currencies', name)
                    dest.writelines(l)
        os.remove(f)








