export class Quote {
    showDescription: boolean;
 
    constructor(public id: number, public name: string, public description: string, public createDate: Date, public upVote: number, public downVote: number, public isInspirational: boolean){
        this.showDescription=false;
    }
 }
 
