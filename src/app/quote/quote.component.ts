import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    new Quote(1, 'The way I see it, if you  want the rainbow, you have to put up with the rain.', 'Dolly Parton', new Date('2021,7,19'),0 , 0,false),
    new Quote(2, 'If you want to fly   give up everything that weighs you down.', 'Gurubogsa', new Date('2021,7,19'),0 ,0,false),
    new Quote(3, 'Sometimes you will never  know the value of a moment until it becomes a memory.', 'DR SEUSS', new Date('2021,7,20'),0,0,false),
    new Quote(4, 'Everything you can imagine is real.', 'Pablo Picasso', new Date('2021,7,20'),0,0,false),
    new Quote(5, 'When life gives you a  hundred reasons to break down and cry,show life that you   have a million reasons to smile and laugh.', 'FunZmo', new Date('2021,7,18'),0,0,false),
    new Quote(6, 'The way we see the   problem is the problem.', 'Steve Covey', new Date('2021,7,19'),0,0,false)
  ];
   toggleDetails(index:any){
     this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }
   upVote(isUpVote:any, index:any){
     
       this.quotes[index].upVote++
       this.inspirationalQuote();
     
   }
   downVote(isDownVote:any, index:any){
     
       this.quotes[index].downVote++
     
   }

   deleteQuote(isCreate:any, index:any){
     if(isCreate){
       let toDelete = confirm(`Are you sure you  want to delete quote?`)

       if(toDelete){
         this.quotes.splice(index,1)
       }
     }
     
   }
   addNewQuote (quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.createDate = new Date(quote.createDate)
    quote.isInspirational = false;
    this.quotes.push(quote)
  }
  inspirationalQuote(){
    let maxValue: number = Math.max.apply(
      Math,
      this.quotes.map(function (quote){
        return quote.upVote;
      })
    );
    let quoteIndex: number = this.quotes.findIndex(
      (quote) =>quote.upVote === maxValue
    );
    this.quotes.forEach((quote) =>{
      quote.isInspirational = false;
    });
    this.quotes[quoteIndex].isInspirational = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
