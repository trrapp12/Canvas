(() => {
  const canvas = document.getElementById('allSeeingEye')
  let context = canvas.getContext('2d');
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;

  // find window center 
  let centerPointX = (windowWidth / 2)
  let centerPointY = (windowHeight / 2)

  // construct triangle
  
  // class Triangle {
  //   constructor (x1, y1, x2, y2, x3, y3, height) {
  //     this.x1 = x1;
  //     this.y1 = y1; 
  //     this.x2 = x2; 
  //     this.y2 = y2; 
  //     this.x3 = x3; 
  //     this.y3 = y3; 
  //     this.height = height;
  //   }

  // }

  let sideLengthCurrent = (windowWidth / 12)

  let triangleHeight = (sideLength) => {
    return ((sideLength * Math.sqrt(3)) / 2)
  };

  let x1 = centerPointX;
  let y1 = centerPointY;

  let y2 = (y1, height) => {
    return (y1 - height)
  };

  let y3 = (y1, height) => {
    return (y1 - height)
  };

  let x2 = (x1, sideLength) => {
    return (x1 + (sideLength / 2))
  };

  let x3 = (x1, sideLength) => {
    return (x1 - (sideLength / 2))
  };

  // in trigonometry a centroid is the center of mass of a triangle.  In an equilateral triangle it is also the center around which it would rotate.  Here the x, y coordinate of this point would be (centroidX, centroidY)

  let centroidX = (sideLength) => {
    return (sideLength / 2)
  }

  let centroidY = (triangleHeight) => {
    return (triangleHeight / 3)
  }

  // in trigonometry the circle that fits completely inside the triangle and touches three sides of it is called the inscribed circle.  The center of that circle is called the incenter.  In an equilateral triangle this is the same as the centroid of the triangle.  See above.  The radius of that circle is called the inradius.
  let inRadius = (triangleHeight) => {
    return (triangleHeight / 3 )
  }

  context.beginPath();
  context.moveTo(x1, y1 + triangleHeight(sideLengthCurrent));
  context.lineTo(x2(x1, sideLengthCurrent), y2(y1, triangleHeight(sideLengthCurrent)));
  context.lineTo(x3(x1, sideLengthCurrent), y3(y1, triangleHeight(sideLengthCurrent)));
  context.lineTo(centerPointX, centerPointY + triangleHeight(sideLengthCurrent));
  context.fill();

})()