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

KishiTechJS.AABB = function(context, color, lineWidth, width, height, anchorType, isFilled)
{
	KishiTechJS.Object.call(this, context, color);

	this.lineWidth = lineWidth;
	this.width = width;
	this.height = height;
	this.halfWidth = width * 0.5;
	this.halfHeight = height * 0.5;
	this.anchorType = anchorType;
	this.isFilled = isFilled;
}

KishiTechJS.AABB.AnchorType = {
	TopLeft: 1,
	Top: 2,
	TopRight: 3,
	Left: 4,
	Center: 5,
	Right: 6,
	BottomLeft: 7,
	Bottom: 8,
	BottomRight: 9,
};

KishiTechJS.AABB.prototype = Object.create(KishiTechJS.Object.prototype);

KishiTechJS.AABB.prototype.constructor = KishiTechJS.AABB;
	
KishiTechJS.AABB.prototype.draw = function()
{
	this.context.save();
	this.context.beginPath();
	
	switch (this.anchorType)
	{
		case KishiTechJS.AABB.AnchorType.TopLeft:
			this.context.rect(this.x, this.y, this.width, this.height);
			break;
		case KishiTechJS.AABB.AnchorType.Top:
			this.context.rect(this.x - this.halfWidth, this.y, this.width, this.height);
			break;
		case KishiTechJS.AABB.AnchorType.TopRight:
			this.context.rect(this.x - this.width, this.y, this.width, this.height);
			break;
		case KishiTechJS.AABB.AnchorType.Left:
			this.context.rect(this.x, this.y - this.halfHeight, this.width, this.height);
			break;
		case KishiTechJS.AABB.AnchorType.Center:
			this.context.rect(this.x - this.halfWidth, this.y - this.halfHeight, this.width, this.height);
			break;
		case KishiTechJS.AABB.AnchorType.Right:
			this.context.rect(this.x - this.width, this.y - this.halfHeight, this.width, this.height);
			break;
		case KishiTechJS.AABB.AnchorType.BottomLeft:
			this.context.rect(this.x, this.y - this.height, this.width, this.height);
			break;
		case KishiTechJS.AABB.AnchorType.Bottom:
			this.context.rect(this.x - this.halfWidth, this.y - this.height, this.width, this.height);
			break;
		case KishiTechJS.AABB.AnchorType.BottomRight:
			this.context.rect(this.x - this.width, this.y - this.height, this.width, this.height);
			break;
	}
	
	this.context.closePath();
	this.context.lineWidth = this.lineWidth;
	
	if (this.isFilled)
	{
		this.context.fillStyle = this.color;
		this.context.fill();
	}
	else
	{
		this.context.strokeStyle = this.color;
		this.context.stroke();
	}
	
	this.context.restore();
}

KishiTechJS.AABB.prototype.setLineWidth = function(lineWidth)
{
	this.lineWidth = lineWidth;
}

KishiTechJS.AABB.prototype.getWidth = function()
{
	return this.width;
}
	
KishiTechJS.AABB.prototype.setWidth = function(width)
{
	this.width = width;
}

KishiTechJS.AABB.prototype.getHeight = function()
{
	return this.height;
}
	
KishiTechJS.AABB.prototype.setHeight = function(height)
{
	this.height = height;
}

KishiTechJS.AABB.prototype.getLeft = function()
{
	switch (this.anchorType)
	{
		case KishiTechJS.AABB.AnchorType.TopLeft:
		case KishiTechJS.AABB.AnchorType.Left:
		case KishiTechJS.AABB.AnchorType.BottomLeft:
			return this.x;
		case KishiTechJS.AABB.AnchorType.TopRight:
		case KishiTechJS.AABB.AnchorType.Right:
		case KishiTechJS.AABB.AnchorType.BottomRight:
			return this.x - this.width;
		case KishiTechJS.AABB.AnchorType.Top:
		case KishiTechJS.AABB.AnchorType.Center:
		case KishiTechJS.AABB.AnchorType.Bottom:
			return this.x - this.halfWidth;
	}
}

KishiTechJS.AABB.prototype.getRight = function()
{
	switch (this.anchorType)
	{
		case KishiTechJS.AABB.AnchorType.TopLeft:
		case KishiTechJS.AABB.AnchorType.Left:
		case KishiTechJS.AABB.AnchorType.BottomLeft:
			return this.x + this.width;
		case KishiTechJS.AABB.AnchorType.TopRight:
		case KishiTechJS.AABB.AnchorType.Right:
		case KishiTechJS.AABB.AnchorType.BottomRight:
			return this.x;
		case KishiTechJS.AABB.AnchorType.Top:
		case KishiTechJS.AABB.AnchorType.Center:
		case KishiTechJS.AABB.AnchorType.Bottom:
			return this.x + this.halfWidth;
	}
}

KishiTechJS.AABB.prototype.getTop = function()
{
	switch (this.anchorType)
	{
		case KishiTechJS.AABB.AnchorType.TopLeft:
		case KishiTechJS.AABB.AnchorType.Top:
		case KishiTechJS.AABB.AnchorType.TopRight:
			return this.y;
		case KishiTechJS.AABB.AnchorType.Left:
		case KishiTechJS.AABB.AnchorType.Center:
		case KishiTechJS.AABB.AnchorType.Right:
			return this.y - this.halfHeight;
		case KishiTechJS.AABB.AnchorType.BottomLeft:
		case KishiTechJS.AABB.AnchorType.Bottom:
		case KishiTechJS.AABB.AnchorType.BottomRight:
			return this.y - this.height;
	}
}

KishiTechJS.AABB.prototype.getBottom = function()
{
	switch (this.anchorType)
	{
		case KishiTechJS.AABB.AnchorType.TopLeft:
		case KishiTechJS.AABB.AnchorType.Top:
		case KishiTechJS.AABB.AnchorType.TopRight:
			return this.y + this.height;
		case KishiTechJS.AABB.AnchorType.Left:
		case KishiTechJS.AABB.AnchorType.Center:
		case KishiTechJS.AABB.AnchorType.Right:
			return this.y + this.halfHeight;
		case KishiTechJS.AABB.AnchorType.BottomLeft:
		case KishiTechJS.AABB.AnchorType.Bottom:
		case KishiTechJS.AABB.AnchorType.BottomRight:
			return this.y;
	}
}

KishiTechJS.AABB.prototype.isFilled = function()
{
	return this.isFilled;
}

KishiTechJS.AABB.prototype.setIsFilled = function(isFilled)
{
	this.isFilled = isFilled;
}

KishiTechJS.AABB.prototype.isCollidingWith = function(otherAABB)
{
	var isToTheRightOfOther = this.getLeft() > otherAABB.getRight();
	var isToTheLeftOfOther = this.getRight() < otherAABB.getLeft();
	var isAboveOther = this.getBottom() < otherAABB.getTop();
	var isBelowOther = this.getTop() > otherAABB.getBottom();
	return !(isToTheRightOfOther || isToTheLeftOfOther || isAboveOther || isBelowOther);
}
