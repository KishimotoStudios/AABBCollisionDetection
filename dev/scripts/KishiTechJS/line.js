/*
	Copyright (C) 2015 Kishimoto Studios. All Rights Reserved.
	contact@kishimotostudios.com
	
	The MIT License (MIT)
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

var KishiTechJS = KishiTechJS || {}; 

KishiTechJS.Line = function(context, color, lineWidth)
{
	KishiTechJS.Object.call(this, context, color);
	
	this.lineWidth = lineWidth;
}

KishiTechJS.Line.prototype = Object.create(KishiTechJS.Object.prototype);

KishiTechJS.Line.prototype.constructor = KishiTechJS.Line;

KishiTechJS.Line.prototype.draw = function(toX, toY)
{
	this.context.save();
	this.context.beginPath();
	this.context.moveTo(this.x, this.y);
	this.context.lineTo(toX, toY);
	this.context.closePath();
	this.context.lineWidth = this.lineWidth;
	this.context.strokeStyle = this.color;
	this.context.stroke();
	this.context.restore();
}

KishiTechJS.Line.prototype.setLineWidth = function(lineWidth)
{
	this.lineWidth = lineWidth;
}
