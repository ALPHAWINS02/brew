import React from "react";
import './contactform.css';
import attach from '../../assests/images/attach_file_add.png';
import attach_img from '../../assests/images/add_photo_alternate.png';


class CustomSelect {
    constructor(originalSelect) {
      this.originalSelect = originalSelect;
      this.customSelect = document.createElement("div");
      this.customSelect.classList.add("select");
  
      this.originalSelect.querySelectorAll("option").forEach((optionElement) => {
        if(optionElement.textContent!==""){
          const itemElement = document.createElement("div");
  
          itemElement.classList.add("select__item");
          itemElement.textContent = optionElement.textContent;
          this.customSelect.appendChild(itemElement);
    
          if (optionElement.selected) {
            this._select(itemElement);
          }
    
          itemElement.addEventListener("click", () => {
            if (
              this.originalSelect.multiple &&
              itemElement.classList.contains("select__item--selected")
            ) {
              this._deselect(itemElement);
            } else {
              this._select(itemElement);
            }
          });
        }
        
      });
  
      this.originalSelect.parentNode.replaceChild(this.customSelect,this.originalSelect);
      this.originalSelect.style.display = "none";
    }
  
    _select(itemElement) {
      const index = Array.from(this.customSelect.children).indexOf(itemElement);
  
      if (!this.originalSelect.multiple) {
        this.customSelect.querySelectorAll(".select__item").forEach((el) => {
          el.classList.remove("select__item--selected");
        });
      }
  
      this.originalSelect.querySelectorAll("option")[index].selected = true;
      itemElement.classList.add("select__item--selected");
    }
  
    _deselect(itemElement) {
      const index = Array.from(this.customSelect.children).indexOf(itemElement);
  
      this.originalSelect.querySelectorAll("option")[index].selected = false;
      itemElement.classList.remove("select__item--selected");
    }
  }

  
const Form =()=>{
    
    const s="< 6 months";
    React.useEffect(()=>{
      document.querySelectorAll(".custom-select").forEach((selectElement) => {
        new CustomSelect(selectElement);
        });
    });
    return(
        <div className="contactform">
            <form>
                <p>Who am I speaking with, if I may ask?</p>
                <input type="text" placeholder="Full Name" required></input><br></br><br></br>
                <input type="text" placeholder="Email Address" required></input><br></br>
                <div className="company-main">
                    <p>Could you please provide information on the size of your company?</p>
                        <select name='company[]' className='custom-select'>
                            <option value=""></option>
                            <option value="Above series A">Above series A</option>
                            <option value="Series A">Series A</option>
                            <option value="Seed">Seed</option>
                            <option value="Pre-Seed">Pre-Seed</option>
                        </select>
                </div>
                <div className="requirements-main">
                    <p>Would you mind sharing what you require?</p>
                        <select name='requirement[]' className='custom-select'>
                            <option value=""></option>
                            <option value="Free intro call">Free intro call</option>
                            <option value="Product Discovery">Product Discovery</option>
                            <option value="Protyping">Protyping</option>
                            <option value="Product Design">Product Design</option>
                            <option value="Website">Website</option>
                            <option value="MVP">MVP</option>
                            <option value="CTO as a service">CTO as a service</option>
                        </select>
                </div>
                <div className="timeframe-main">
                    <p>Can you please provide details on your timeframe?</p>
                        <select name='time[]' className='custom-select'>
                            <option value=""></option>
                            <option value="Not Specified">Not Specified</option>
                            <option value="> 6 months">> 6 months</option>
                            <option value="< 6 months">{s}</option>
                        </select>
                </div>
                <div className="additional">
                    <textarea rows='20' cols='100'></textarea>
                    <div className="insert21">
                      <img src={attach} className="attach"></img>
                      <img src={attach_img} className="attach-img"></img>
                    </div >
                </div>
                <button id='submitButton' formAction="submit"><b>Send</b></button>
            </form>
        </div>
    );
}
export default Form;