export class Item{
     id=0;
    name="";
    isComplete = false;

    constructor() {
        this.id = 0;
        this.name = ""; 
        this.isComplete = false;
      }
      setId(id){
        this.id=id;
      }
      setName(newName) {
        this.name = newName;
      }
      setIsComplete(isComplete){
        this.isComplete=isComplete;
      }
   
}
