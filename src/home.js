import Axios from "axios";

class animation {
  constructor(){
    this.menu = document.querySelector('.headmenu');
    this.pmenu = document.querySelector('.nav');
    this.liel = document.querySelector('.nav-links');    
    this.click();
  }

    click(){
      var menuopen = false;
      this.menu.addEventListener('click', () => {
        if(!menuopen){
         this.pmenu.style.transform = 'translateX(0px)';
         this.pmenu.style.opacity = '1';
         this.pmenu.style.visibility = 'visible';
         this.menu.classList.add('open');
         menuopen = true;
        }
        else{
          this.pmenu.style.transform = 'translateX(-400px)';
          this.pmenu.style.opacity = '0';
          this.pmenu.style.visibility = 'hidden';
          this.menu.classList.remove('open');
          menuopen = false;
        }
      })
    }
}

new animation();

class marvel{
  constructor(){
    this.time = '1587571349';
    this.publickey = '1c37cf42c8d877bdc0f8da81e13cbf31';
    this.hash = '06c265786cef4484e53e2c1ccb691df3';
    this.code = [1017316, 1009368, 1010335, 1017332, 1009165, 1011393,  1009299];
    this.name = [];
    this.img = [];
    this.code.forEach( chara => this.getmembers(chara)); 


  }
  
  async getmembers(chara){
    
    try {
      const response = await Axios.get('https://gateway.marvel.com/v1/public/characters/'+ chara +'?ts=1&apikey=1c37cf42c8d877bdc0f8da81e13cbf31&hash=28896a3aea05d982db8edc0fc748bade');
      const result = response.data.data.results; 
      this.name.push(result[0].name);
      
      this.img.push(result[0].thumbnail.path + '.jpg');
      this.render();
      
      } catch (error) {
          console.log(error);
      }
      
    }
    
    render() {
      for( let i = 0; i < 6; i++){
        document.querySelector(".name"+ i + "").textContent = this.name[i];
        document.querySelector(".img"+ i + "").src = this.img[i];
      }
    }
}

new marvel();
