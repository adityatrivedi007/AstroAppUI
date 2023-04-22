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
  _kundliList:kundli[]=[]
  kundliCheckBoxDisabled = false;
  kundliType:string;

  ngOnInit()
  {
    this._houses = new house();
    this.getHouses(); 
    this.getkundlis(); 
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

  getkundlis()
  {
    this._kundliList = [
      {id:1,name:"Lagna Kundli",isSelected:false},
      {id:2,name:"Varsha Kundli",isSelected:false}
    ]
  }

  
  checkedNumber: number =0;
  limitNumber: number = 1;
  onKundliChange()
  {
    this.kundliType = this._kundliList.filter(x=>x.isSelected==true).map(x=>x.id).toString();
    if(this.kundliType.length>0)
    {
     this.checkedNumber++
    }
    else
    {
      this.checkedNumber--
    }
    console.log("Hii"+this.checkedNumber)
  }

  printThisPage()
  {
    // var printContent = document.getElementById("printSection");
    // var originalContent = document.body.innerHTML;
    // if(printContent)
    // {
    // document.body.innerHTML = printContent.innerHTML;
    // window.print();
    // document.body.innerHTML = originalContent;
    // }

    var prtContent = document.getElementById("printSection");
    var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    if(WinPrint && prtContent)
    {
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
    }
  }

  onchange()
  {

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
      let kundliTypeName = ""
      if(this.kundliType == "1")
      {
       kundliTypeName = "LK"
      }
      else
      {
       kundliTypeName = "VK"
      }
      console.log("Yooo"+kundliTypeName)
      for(const planet in this._houselist[house].planetList)
      {
        if(this._houselist[house].planetList[planet].isselected == true)
        {
          planets.push(this._houselist[house].planetList[planet].name)
        }
      }
      if(housName == "1" || housName == "7" || housName == "4" || housName == "10")
      {
      this.house1(housName,planets,kundliTypeName);
      }
      if(housName == "2" || housName == "12")
      {
      this.house2(housName,planets,kundliTypeName);
      }
      if(housName == "3" || housName == "11" || housName == "9" || housName == "5")
      {
      this.house3(housName,planets,kundliTypeName);
      }

      if(housName == "6" || housName == "8")
      {
      this.house6(housName,planets,kundliTypeName);
      }
    }
  }

  house1(housName:string,planets:string[],kundliTypeName:string)
  {
    var count =1;
    let planetTextR1 = document.getElementById(kundliTypeName+housName+"1")
    let planetTextR2 = document.getElementById(kundliTypeName+housName+"2")
    let planetTextR3 = document.getElementById(kundliTypeName+housName+"3")
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

  house2(housName:string,planets:string[],kundliTypeName:string)
  {
    var count =1;
    let planetTextR1 = document.getElementById(kundliTypeName+housName+"1")
    let planetTextR2 = document.getElementById(kundliTypeName+housName+"2")
    let planetTextR3 = document.getElementById(kundliTypeName+housName+"3")
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

  house3(housName:string,planets:string[],kundliTypeName:string)
  {
    var count =1;
    let planetTextR1 = document.getElementById(kundliTypeName+housName+"1")
    let planetTextR2 = document.getElementById(kundliTypeName+housName+"2")
    let planetTextR3 = document.getElementById(kundliTypeName+housName+"3")
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

  house6(housName:string,planets:string[],kundliTypeName:string)
  {
    var count =1;
    let planetTextR1 = document.getElementById(kundliTypeName+housName+"1")
    let planetTextR2 = document.getElementById(kundliTypeName+housName+"2")
    let planetTextR3 = document.getElementById(kundliTypeName+housName+"3")
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
class kundli{
  id: number;
  name:string;
  isSelected: boolean;
}







  