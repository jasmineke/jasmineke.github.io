// // source: https://github.com/sudhanshuRathore/circular-text/blob/master/script.js

// const degreeToRadian = angle => {
//     return angle * (Math.PI / 180);
// }

// const pointOnCircle = (radius, angle = 0) => {
//     const xPos = radius * Math.cos(degreeToRadian(angle));
//     const yPos = radius * Math.sin(degreeToRadian(angle));
//     return {
//         x: xPos,
//         y: yPos
//     }
// }

// const radius = 50;
// const diameter = radius * 2;

// const circle = document.querySelector('#circular-text');

// circle.style.width = `${diameter}px`;
// circle.style.height = `${diameter}px`;

// const text = circle.innerText;
// const characters = text.split('');
// circle.innerText = null;

// const startAngle = -90;
// const endAngle = 270;
// const angleRange = endAngle - startAngle;

// const deltaAngle = angleRange / characters.length;
// let currentAngle = startAngle;

// characters.forEach((char, index) => {
//     const charElement = document.createElement('span');
//     charElement.innerText = char;
//     circle.appendChild(charElement);

//     let { x: xPos, y: yPos } = pointOnCircle(radius, currentAngle);
    
//     /**
//      * Move center of drawn circle to 
//      * match parents center.
//      */
//     xPos += radius;
//     yPos += radius;

//     const translate = `translate(${xPos}px, ${yPos}px)`;
//     const rotate = `rotate(${index * deltaAngle}deg)`;

//     charElement.style.transform = `${translate} ${rotate}`;

//     currentAngle += deltaAngle;
// });

function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
      classIndex = document.getElementsByClassName("circTxt")[classIndex];
  
    var deg = 360 / txt.length,
      origin = 0;
  
    txt.forEach((ea) => {
      ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
      classIndex.innerHTML += ea;
      origin += deg;
    });
  }
  
  circularText("this text is in a circle ", 100, 0);