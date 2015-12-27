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

KishiTechJS.Canvas = function(canvas)
{
	if (typeof canvas == 'string')
		this.canvas = document.getElementById(canvas);
	else
		this.canvas = canvas;

	this.context = this.canvas.getContext('2d');
	
	this.width = this.canvas.width;
	this.height = this.canvas.height;
	
	this.bounds = this.canvas.getBoundingClientRect();
}

KishiTechJS.Canvas.prototype =
{
	constructor: KishiTechJS.Canvas,
	
	goFullScreen: function()
	{
		if (this.canvas.webkitRequestFullScreen)
			this.canvas.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		else if (this.canvas.mozRequestFullScreen)
			this.canvas.mozRequestFullScreen();
		else if (this.canvas.requestFullScreen)
			this.canvas.requestFullScreen();
	},
	
	addEventListener: function(eventName, callback, useCapture)
	{
		this.canvas.addEventListener(eventName, callback, useCapture);
	},
	
	removeEventListener: function(eventName, callback, useCapture)
	{
		this.canvas.removeEventListener(eventName, callback, useCapture);
	},
	
	getContext: function()
	{
		return this.context;
	},
	
	getWidth: function()
	{
		return this.width;
	},
	
	getHeight: function()
	{
		return this.height;
	},
	
	clear: function(color)
	{
		this.context.save();
		this.context.fillStyle = color;
		this.context.fillRect(0, 0, this.width, this.height);
		this.context.restore();
	},
	
	centerX: function(width)
	{
		return (this.width - width) * 0.5;
	},
	
	centerY: function(height)
	{
		return (this.height - height) * 0.5;
	},

	screenToCanvas: function(screenX, screenY)
	{
		this.bounds = this.canvas.getBoundingClientRect();
		
		return {
			x: screenX - this.bounds.left,
			y: screenY - this.bounds.top
		};
	},	
}
