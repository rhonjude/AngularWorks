import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'books-app',
  templateUrl: './books-component.component.html',
  styleUrls: ['./books-component.component.css']
})
export class BooksComponentComponent implements OnInit {

  bookForm!:FormGroup;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.bookForm = this.fb.group({
      books:this.fb.array([])
    });
  }

  books():FormArray{

    return this.bookForm.get("books") as FormArray;
  }

  newBooks():FormGroup{
    return this.fb.group({
      bookName: '',
    authorName:'',
    publisher:this.fb.array([])
    });

  }
  addBooks(){
    this.books().push(this.newBooks());
  }
  removeBooks(bookIndex:number){
    this.books().removeAt(bookIndex);
  }
  bookPublisher(bookIndex:number):FormArray{
    return this.books().at(bookIndex).get("publisher") as FormArray;
  }
  newPublisher():FormGroup{
    return this.fb.group({
      publisherName:'',
      email:''
    });
  }
    addPublisher(bookIndex:number){
      this.bookPublisher(bookIndex).push(this.newPublisher());
  
  
  }
  removePublisher(bookIndex:number,publisherIndex:number){
    this.bookPublisher(bookIndex).removeAt(publisherIndex);
  }
  
  onSubmit(){
    console.log(this.bookForm.value);
    
  }

}
