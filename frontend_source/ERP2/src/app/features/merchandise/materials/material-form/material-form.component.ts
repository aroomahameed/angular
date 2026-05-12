import { Component, OnInit} from '@angular/core';
import { Material,addMaterial} from '../../../store/merchandise/material';
import { Subcategory,loadSubcategories,selectAllSubcategories } from '../../../store/merchandise/subcategory';
import { Season,loadSeasons,selectAllSeasons } from '../../../store/article/season';
import { Uom,loadUoms,selectAllUoms } from '../../../store/settings/uom';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {Observable,of } from 'rxjs';


@Component({
  selector: 'smmat-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent implements OnInit {
  subcategory: Observable<Subcategory[]>;
  uoms: Observable<Uom[]>;
  season: Observable<Season[]>;
  materials: Material;
  fg: FormGroup;
  submitted = false;
  title = 'Add';
  public error: any; 
  imageurl = "assets/img/demo/upload.png";
  filetoupload: File = null;
  releasestatus = of([{ id: 'New', name: 'New' }, { id: 'Pending', name: 'Pending' }, { id: 'Releases', name: 'Releases' }, { id: 'Rejected', name: 'Rejected' }])
  devtype = of([{ id: 'New', name: 'New' }, { id: 'Cross Development', name: 'Cross Development' }, { id: 'Improve', name: 'Improve' }])

  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder,private store: Store<any>,) { }
  private relationId(value: any) {
    return value && value.id ? value.id : value;
  }

  private imageSrc(image: any) {
    if (typeof image === 'string' && image.trim()) {
      const value = image.trim();
      if (
        value.startsWith('data:image/') ||
        value.startsWith('assets/') ||
        value.startsWith('/') ||
        value.startsWith('http://') ||
        value.startsWith('https://')
      ) {
        return value;
      }
    }

    return 'assets/img/demo/upload.png';
  }

  ngOnInit() {
    this.imageurl = this.imageSrc(this.materials && this.materials.image ? this.materials.image : this.imageurl);
    this.buildForm();
    this.store.dispatch( loadSubcategories());
    this.subcategory = this.store.select(selectAllSubcategories);
    this.store.dispatch(loadUoms());
    this.uoms = this.store.select(selectAllUoms);
    this.store.dispatch(loadSeasons());
    this.season = this.store.select(selectAllSeasons);
   

  }
  
  handlefileinput(file: FileList) {
    this.filetoupload = file.item(0);
    //show image review
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageurl = event.target.result;
    }
    reader.readAsDataURL(this.filetoupload);
  }

  // convenience getter for easy access to form fields



 
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.materials?this.materials.id:null],
      name: [this.materials?this.materials.name:'', Validators.required],
      barcode: [this.materials?this.materials.barcode:'', Validators.required],
      mat_lock_status:[this.materials?this.materials.mat_lock_status:''],
      image:[this.materials?this.materials.image:''],
      sub_category:[this.materials ? this.relationId(this.materials.sub_category) :  null, Validators.required],
      hs_code:[this.materials?this.materials.hs_code:'',Validators.required],
      unit_price:[this.materials?this.materials.unit_price:'',Validators.required],
      sale_uom:[this.materials?this.relationId(this.materials.sale_uom)  : null,Validators.required],
      base_uom:[this.materials?this.relationId(this.materials.base_uom) : null,Validators.required],
      tpt_no:[this.materials?this.materials.tpt_no:''],
      dimensions:[this.materials?this.materials.dimensions:''],
      volume_unit:[this.materials?this.materials.volume_unit:''],
      volume:[this.materials?this.materials.volume:''],
      weight:[this.materials?this.materials.weight:''],
      gross_weight:[this.materials?this.materials.gross_weight:''],
      net_weight:[this.materials?this.materials.net_weight:''],
      weight_unit:[this.materials?this.materials.weight_unit:''],
      mat_width:[this.materials?this.materials.mat_width:''],
      mat_height:[this.materials?this.materials.mat_height:''],
      mat_length:[this.materials?this.materials.mat_length:''],
      reorder_level:[this.materials?this.materials.reorder_level:''],
      min_qty:[this.materials?this.materials.min_qty:''],
      max_qty:[this.materials?this.materials.max_qty:''],
      old_material_code:[this.materials?this.materials.old_material_code:''],
      ean_category:[this.materials?this.materials.ean_category:''],
      ean_ups_category:[this.materials?this.materials.ean_ups_category:''],
      remarks:[this.materials?this.materials.remarks:''],
      conversion_formula:[this.materials?this.materials.conversion_formula:''],
      material_developer: [this.materials?this.materials.material_developer:''],
      composition : [this.materials?this.materials.composition:''],
      construction: [this.materials?this.materials.construction:''],
      thickness : [this.materials?this.materials.thickness:''],
      mat_release_status : [this.materials?this.materials.mat_release_status:null],
      first_season: [this.materials?this.relationId(this.materials.first_season):null],
      dev_type : [this.materials?this.materials.dev_type:null],
      status: [this.materials?this.materials.status:''],
      
    });
  }
 

 
  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    let mat = {...this.fg.value};
    const selectedImage = event.target.Image && event.target.Image.files && event.target.Image.files.length
      ? <File>event.target.Image.files[0]
      : null;
    mat.image = selectedImage || this.fg.value['image'] || this.imageurl;
    if (!mat.image && (this.fg.value['id'] === 0 || this.fg.value['id'] === null)){
    // this.toaster.error('Please select a valid image file');
    }else{
    let formData = new FormData();
    for(const key of Object.keys(mat)){
      if(mat[key] !== null && mat[key] !== undefined)
      formData.append(key, mat[key]);
    }

    formData.append('update', 'true');
    this.store.dispatch(addMaterial({data: formData}));
 
  }

  }
}
