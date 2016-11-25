function Board(element)
{
  this.element = element;
  this.room = [];
  
  this.start = function()
  {
  }
  
  this.enter_room = function()
  {
    console.log("Entering room");
    donsol.player.can_drink = true;
    
    this.remove_cards();
    this.add_card(0,donsol.deck.draw_card());
    this.add_card(1,donsol.deck.draw_card());
    this.add_card(2,donsol.deck.draw_card());
    this.add_card(3,donsol.deck.draw_card());
    
    $(this.room[0].element).delay(200).animate({ opacity: 1, top: "0" }, 200);
    $(this.room[1].element).delay(250).animate({ opacity: 1, top: "0" }, 200);
    $(this.room[2].element).delay(300).animate({ opacity: 1, top: "0" }, 200);
    $(this.room[3].element).delay(350).animate({ opacity: 1, top: "0" }, 200);
  }
  
  this.add_card = function(index,card)
  {
    this.element.appendChild(card.install());
    this.room.push(card);
  }
  
  this.remove_cards = function()
  {
    this.room = [];
    this.element.innerHTML = '';
  }
  
  this.skip = function()
  {
    var flipped = 0;
    if(this.room[0].is_flipped){ flipped += 1; }
    if(this.room[1].is_flipped){ flipped += 1; }
    if(this.room[2].is_flipped){ flipped += 1; }
    if(this.room[3].is_flipped){ flipped += 1; }
    
    if(flipped < 3){
      console.log("Cannot escape");
      return;
    }
    this.escape();
  }
  
  this.escape = function()
  {
    if(!this.room[0].is_flipped){ donsol.deck.return_card(this.room[0]); }
    if(!this.room[1].is_flipped){ donsol.deck.return_card(this.room[1]); }
    if(!this.room[2].is_flipped){ donsol.deck.return_card(this.room[2]); }
    if(!this.room[3].is_flipped){ donsol.deck.return_card(this.room[3]); }
    
    this.enter_room();
    console.log("Escaped!");
  }
  
  this.update = function()
  {
    if(this.room[0].is_flipped && this.room[1].is_flipped && this.room[2].is_flipped && this.room[3].is_flipped){
      this.enter_room();
    }
  }
}