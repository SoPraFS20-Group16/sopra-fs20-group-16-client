import React from 'react';
import { withRouter } from 'react-router-dom';
import Hexagon from "./Hexagon";




class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hexSize: 60,
            hexOrigin: {x: 400, y: 340}

        };
    }

    componentWillMount() {
        let hexParameters = this.getHexParameters()
        this.setState({
            canvasSize : {canvasWidth:800, canvasHeight:600},
            hexParameters : hexParameters
        })
    }


    componentDidMount() {
        const {canvasWidth, canvasHeight} = this.state.canvasSize;
        //assigning canvasWidth to the one chosen in setState
        this.canvasHex.width = canvasWidth;
        //assigning canvasHeight to the one chosen in setState
        this.canvasHex.height = canvasHeight;
        //this.drawHex(this.canvasHex, { x: 50, y: 50})
        //this.drawHex(this.canvasHex, { x: 452, y: 492})
        this.drawHexes();
    }


    drawHexes(){
        const {canvasWidth, canvasHeight} = this.state.canvasSize;
        const {hexWidth, hexHeight, vertDist, horizDist} = this.state.hexParameters;
        const hexOrigin = this.state.hexOrigin;

        //q --> columns    r--> rows

        for (let q=0; q<=2; q++){
            let center = this.hexToPixel(this.Hex(q,-2));
            this.drawHex(this.canvasHex, center);
            this.drawHexCoordinates(this.canvasHex,center,this.Hex(q,-2));
        }

        for (let q=-1; q<=2; q++){
            let center = this.hexToPixel(this.Hex(q,-1));
            this.drawHex(this.canvasHex, center);
            this.drawHexCoordinates(this.canvasHex,center,this.Hex(q,-1));
        }

        for (let q=-2; q<=2; q++){
            let center = this.hexToPixel(this.Hex(q,0));
            this.drawHex(this.canvasHex, center);
            this.drawHexCoordinates(this.canvasHex,center,this.Hex(q,0));
        }

        for (let q=-2; q<=1; q++){
            let center = this.hexToPixel(this.Hex(q,1));
            this.drawHex(this.canvasHex, center);
            this.drawHexCoordinates(this.canvasHex,center,this.Hex(q,1));
        }

        for (let q=-2; q<=0; q++) {
            let center = this.hexToPixel(this.Hex(q, 2));
            this.drawHex(this.canvasHex, center);
            this.drawHexCoordinates(this.canvasHex,center,this.Hex(q,2));
        }
    }





    getHexesArray(){
        const hexesArray = Array(19);

        for (let q=0; q<=2; q++){
            let center = this.hexToPixel(this.Hex(q,-2));
            hexesArray.push(this.createHex(center));
        }

        for (let q=-1; q<=2; q++){
            let center = this.hexToPixel(this.Hex(q,-1));
            hexesArray.push(this.createHex(center));
        }

        for (let q=-2; q<=2; q++){
            let center = this.hexToPixel(this.Hex(q,0));
            hexesArray.push(this.createHex(center));
        }

        for (let q=-2; q<=1; q++){
            let center = this.hexToPixel(this.Hex(q,1));
            hexesArray.push(this.createHex(center));
        }

        for (let q=-2; q<=0; q++) {
            let center = this.hexToPixel(this.Hex(q, 2));
            hexesArray.push(this.createHex(center));
        }
        return hexesArray;
    }


    //draw one hexagon taking the canvasID and the center
    drawHex(canvasID, center){
        for(let i=0; i<=5; i++){
            let start = this.getHexCornerCoord(center,i);

            console.log(start);

            //get next corner by incrementing the index (i+1)
            let end = this.getHexCornerCoord(center, i+1);
            console.log(end);


            //draw line between the 2 points
            this.drawLine(canvasID, { x: start.x, y: start.y }, { x: end.x, y: end.y })
        }
    }

    createHex(center){
        const coordinates = Array(6);
        for(let i=0; i<=5; i++){
            let start = this.getHexCornerCoord(center,i);
            if(i===0){
                coordinates.push(start);
            }
            let end = this.getHexCornerCoord(center, i+1);

            if(i!==5){
                coordinates.push(end);
            }
        }
        return <Hexagon coords = {coordinates}/>;
    }

    //calculate hexagon coordinates relatively to the center and the index of the corner (i)
    getHexCornerCoord(center, i){
        let angle_deg = 60*i+30;
        let angle_rad = Math.PI/180*angle_deg;
        let x = center.x + this.state.hexSize*Math.cos(angle_rad);
        let y = center.y + this.state.hexSize * Math.sin(angle_rad);

        //return x and y coordinates of the corner
        return this.Point(x, y);
    }


    //get axial coordinates
    hexToPixel(h){
        let hexOrigin = this.state.hexOrigin;
        let x = this.state.hexSize*Math.sqrt(3)*(h.q+h.r/2)+hexOrigin.x;
        let y = this.state.hexSize*3/2*h.r + hexOrigin.y;
        return this.Point(x,y);
    }


    Point(x,y){
        return {x:x,y:y}
    }
    Hex(q,r){
        return {q: q, r: r}
    }

    //draw line between one point (start) and another point (end)
    drawLine(canvasID, start, end){
        const ctx = canvasID.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(start.x,start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        ctx.closePath();
    }


    drawHexCoordinates(canvasID, center, h) {
        const ctx = canvasID.getContext("2d");
        ctx.fillText(h.q, center.x-10, center.y);
        ctx.fillText(h.r, center.x+7, center.y);

    }

    getHexParameters(){
        let hexHeight = this.state.hexSize*2;
        let hexWidth = Math.sqrt(3)/2*hexHeight;
        let vertDist = hexHeight*3/4;
        let horizDist = hexWidth;

        return { hexWidth, hexHeight, vertDist, horizDist}
    }


    render(){
        return (
           <div>
               <canvas ref={canvasHex => this.canvasHex = canvasHex}> </canvas>
           </div>

        );
    }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(Board);
