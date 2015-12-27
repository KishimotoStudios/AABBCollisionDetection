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

KishiTechJS.Object = function(context, color)
{
	this.context = context;

	this.x = 0;
	this.y = 0;
	
	this.color = color;
}

KishiTechJS.Object.prototype =
{
	constructor: KishiTechJS.Object,
	
	getX: function()
	{
		return this.x;
	},
	
	getY: function()
	{
		return this.y;
	},
	
	setX: function(x)
	{
		this.x = x;
	},
	
	setY: function(y)
	{
		this.y = y;
	},
	
	setXY: function(x, y)
	{
		this.x = x;
		this.y = y;
	},

	getPosition: function()
	{
		return {
			x: this.x,
			y: this.y
		};
	},
	
	setPosition: function(position)
	{
		this.setXY(position.x, position.y);
	},
	
	incX: function(x)
	{
		this.x += x;
	},
	
	incY: function(y)
	{
		this.y += y;
	},
	
	setColor: function(color)
	{
		this.color = color;
	},
	
	getColor: function()
	{
		return this.color;
	},
	
	update: function()
	{
		
	},
	
	draw: function()
	{

	},
}
