import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showform',
  templateUrl: './showform.component.html',
  styleUrls: ['./showform.component.css']
})
export class ShowformComponent implements OnInit {
  status : false;
  newEl: '';
  newVn: '';
  showDirec = 'check_all';
  dictionary = [{
    id: 1 ,
    en: 'hello',
    vn:'xin chào',
    de:true
  },{
  id: 2,
  en: 'day',
  vn:'ngày',
  de: false}
]
  constructor() { }

  ngOnInit() {
  }


  onAdd(){
    this.dictionary.unshift({
      id: this.dictionary.length +1,
      en: this.newEl,
      vn: this.newVn,
      de : false
    });
    this.newEl='';
    this.newVn='';
    this.status = false;
  }

  remote(id: number) {
    const index = this.dictionary.findIndex(keys => keys.id === id)
      this.dictionary.splice(index,1);
  }

  showDi(de:boolean) {
    const all = this.showDirec === 'check_all';
    const  daNho = this.showDirec === 'da_doc' && de;
    const  chuaNho = this.showDirec === 'chua_doc' && !de;
    return all || daNho ||chuaNho;
  }
}
