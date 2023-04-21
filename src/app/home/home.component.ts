import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//#region 
// export class HomeComponent {
//   _planetlist:planet[];
//   _houses:house;
//   _houselist:house[]=[];
//   uniquekey:number=0;

//   ngOnInit()
//   {
//     this.getplanets();  
//     this._houses = new house();
//   }
//   getplanets()
//   {
//     this._planetlist=[
//       {id:1,planet:"Su",isselected:false},
//       {id:2,planet:"Mo",isselected:false},
//       {id:3,planet:"Ma",isselected:false},
//       {id:4,planet:"Me",isselected:false},
//       {id:5,planet:"Ju",isselected:false},
//       {id:6,planet:"Ve",isselected:false},
//       {id:7,planet:"Sa",isselected:false},
//       {id:8,planet:"Ra",isselected:false},
//       {id:9,planet:"Ke",isselected:false}
//     ]
//   }

//   onchange()
//   {
//     console.log(this._planetlist);
//   }
//   onsubmit()
//   {
//     this._houses.planetid = this._planetlist.filter(x=>x.isselected==true).map(x=>x.id).join(",").toString();
//     this._houses.planetname = this._planetlist.filter(x=>x.isselected==true).map(x=>x.planet).join(" ").toString();
//     console.log(this._houses.planetid);
//     console.log(this._houses.planetname);
//     let form = document.getElementById('home1')
//     console.log(form)
//     if(form)
//     {
//     form.innerHTML = this._houses.planetname;
//     }
//   }
// }

// class planet{
//   id: number;
//   planet:string;
//   isselected: boolean;
// }

// class house{
//   id: number;
//   name:string;
//   planetid: string;
//   planetname: string
// }
//#endregion

export class HomeComponent {
  _houses:house;
  _houselist:house[]=[];
  uniquekey:number=0;

  ngOnInit()
  {
    this._houses = new house();
    this.getHouses();  
  }
 
  getplanets()
    {
      return [
        {id:1,name:"Su",isselected:false},
        {id:2,name:"Mo",isselected:false},
        {id:3,name:"Ma",isselected:false},
        {id:4,name:"Me",isselected:false},
        {id:5,name:"Ju",isselected:false},
        {id:6,name:"Ve",isselected:false},
        {id:7,name:"Sa",isselected:false},
        {id:8,name:"Ra",isselected:false},
        {id:9,name:"Ke",isselected:false}
      ]
    }

  getHouses()
  {
    this._houselist=[
      {id:1,name:"1",planetList:this.getplanets()},
      {id:2,name:"2",planetList:this.getplanets()},
      {id:3,name:"3",planetList:this.getplanets()},
      {id:4,name:"4",planetList:this.getplanets()},
      {id:5,name:"5",planetList:this.getplanets()},
      {id:6,name:"6",planetList:this.getplanets()},
      {id:7,name:"7",planetList:this.getplanets()},
      {id:8,name:"8",planetList:this.getplanets()},
      {id:9,name:"9",planetList:this.getplanets()},
      {id:10,name:"10",planetList:this.getplanets()},
      {id:11,name:"11",planetList:this.getplanets()},
      {id:12,name:"12",planetList:this.getplanets()}
    ]
console.log(this._houselist);
  }
  onchange()
  {
    console.log(this._houselist);
  }
  onsubmit()
  {
    // this._houses.planetid = this._planetlist.filter(x=>x.isselected==true).map(x=>x.id).join(",").toString();
    // this._houses.planetname = this._planetlist.filter(x=>x.isselected==true).map(x=>x.planet).join(" ").toString();
    // console.log(this._houses.planetid);
    // console.log(this._houses.planetname);
    // let form = document.getElementById('home1')
    // console.log(form)
    // if(form)
    // {
    // form.innerHTML = this._houses.planetname;
    // }


    // this._houselist.forEach(house => {
    //   house.planetList.forEach(planet => {
        
    //   });
    // });


    // for (const house in this._houselist) {
    //   let planets = ''
    //   let housName = this._houselist[house].name;
    //   let planetText = document.getElementById(housName)
    //     for(const planet in this._houselist[house].planetList)
    //     {
    //       if(this._houselist[house].planetList[planet].isselected == true)
    //       {
    //         planets+=this._houselist[house].planetList[planet].name+" " 
    //       }
    //     }
    //     if(planetText)
    //     {
    //       planetText.innerHTML = planets;
    //     }
    // }

    for (const house in this._houselist) {
      let planets = []
      let housName = this._houselist[house].name;
        for(const planet in this._houselist[house].planetList)
        {
          if(this._houselist[house].planetList[planet].isselected == true)
          {
            planets.push(this._houselist[house].planetList[planet].name)
          }
        }
        if(housName == "1" || housName == "7" || housName == "4" || housName == "10")
        {
        this.house1(housName,planets);
        }
        if(housName == "2" || housName == "12")
        {
        this.house2(housName,planets);
        }
        if(housName == "3" || housName == "11" || housName == "9" || housName == "5")
        {
        this.house3(housName,planets);
        }

        if(housName == "6" || housName == "8")
        {
        this.house6(housName,planets);
        }
    }
  }

  house1(housName:string,planets:string[])
  {
    var count =1;
    let planetTextR1 = document.getElementById("VK"+housName+"1")
    let planetTextR2 = document.getElementById("VK"+housName+"2")
    let planetTextR3 = document.getElementById("VK"+housName+"3")
    if(planetTextR1 && planetTextR2 && planetTextR3)
    {
      planetTextR1.innerHTML = ''
      planetTextR2.innerHTML = ''
      planetTextR3.innerHTML = ''
    }
    for(const item in planets)
    {
      if(planetTextR1)
        {
          if(count > 3 && count<8)
          {
            if(planetTextR2)
            {
            planetTextR2.innerHTML += planets[item]+" "
            }
          }
          else if(count> 7)
          {
            if(planetTextR3)
            {
            planetTextR3.innerHTML += planets[item]+" "
            }
          }
          else{
          planetTextR1.innerHTML += planets[item]+" ";
          }
          count++;
        }
      }
  }

  house2(housName:string,planets:string[])
  {
    var count =1;
    let planetTextR1 = document.getElementById("LK"+housName+"1")
    let planetTextR2 = document.getElementById("LK"+housName+"2")
    let planetTextR3 = document.getElementById("LK"+housName+"3")
    if(planetTextR1 && planetTextR2 && planetTextR3)
    {
      planetTextR1.innerHTML = ''
      planetTextR2.innerHTML = ''
      planetTextR3.innerHTML = ''
    }
    for(const item in planets)
    {
      if(planetTextR1)
        {
          if(count > 4 && count<8)
          {
            if(planetTextR2)
            {
            planetTextR2.innerHTML += planets[item]+" "
            }
          }
          else{
          planetTextR1.innerHTML += planets[item]+" ";
          }
          count++;
        }
      }
  }

  house3(housName:string,planets:string[])
  {
    var count =1;
    let planetTextR1 = document.getElementById("LK"+housName+"1")
    let planetTextR2 = document.getElementById("LK"+housName+"2")
    let planetTextR3 = document.getElementById("LK"+housName+"3")
    if(planetTextR1 && planetTextR2 && planetTextR3)
    {
      planetTextR1.innerHTML = ''
      planetTextR2.innerHTML = ''
      planetTextR3.innerHTML = ''
    }
    for(const item in planets)
    {
      if(planetTextR1)
        {
          if(count > 2 && count<6)
          {
            if(planetTextR2)
            {
            planetTextR2.innerHTML += planets[item]+" "
            }
          }
          else if(count>5)
          {
            if(planetTextR3)
            {
              planetTextR3.innerHTML += planets[item]+" ";
            }
          }
          else{
          planetTextR1.innerHTML += planets[item]+" ";
          }
          count++;
        }
      }
  }

  house6(housName:string,planets:string[])
  {
    var count =1;
    let planetTextR1 = document.getElementById("LK"+housName+"1")
    let planetTextR2 = document.getElementById("LK"+housName+"2")
    let planetTextR3 = document.getElementById("LK"+housName+"3")
    if(planetTextR1 && planetTextR2 && planetTextR3)
    {
      planetTextR1.innerHTML = ''
      planetTextR2.innerHTML = ''
      planetTextR3.innerHTML = ''
    }
    for(const item in planets)
    {
      if(planetTextR1)
        {
          if(count > 2 && count<9)
          {
            if(planetTextR2)
            {
            planetTextR2.innerHTML += planets[item]+" "
            }
          }
          else{
          planetTextR1.innerHTML += planets[item]+" ";
          }
          count++;
        }
      }
  }
}



class planet{
  id: number;
  name:string;
  isselected: boolean;
}

class house{
  id: number;
  name:string;
  planetList:planet[];
}

const data = [
  { name: 'John', age: 30, group: 'A' },
  { name: 'Mary', age: 25, group: 'B' },
  { name: 'Mike', age: 20, group: 'A' },
  { name: 'Jane', age: 15, group: 'C' },
  { name: 'Peter', age: 25, group: 'B' }
];




  