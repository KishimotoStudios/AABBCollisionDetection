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

document.addEventListener('DOMContentLoaded', initialize);

var canvas = null;
var context = null;
var keyboard = null;

var aabbKeyboard = null;
var aabbMouse = null;

var keyboardLines = null;
var mouseLines = null;

var AABB_KEYBOARD_WIDTH = 100;
var AABB_KEYBOARD_HEIGHT = 100;
var AABB_MOUSE_WIDTH = 50;
var AABB_MOUSE_HEIGHT = 50;
var KEYBOARD_MOVE = 10;

var language = 'en';

function initialize()
{
	configButtons();
	canvas = new KishiTechJS.Canvas('gameCanvas');
	context = canvas.getContext();
	canvas.addEventListener('mousemove', onMouseMove, false);

	keyboard = new KishiTechJS.Keyboard();	
	document.addEventListener('keydown', keyboard.onKeyDown.bind(keyboard), false);
	document.addEventListener('keyup', keyboard.onKeyUp.bind(keyboard), false);

	aabbKeyboard = new KishiTechJS.AABB(context, KishiTechJS.Constants.get('COLOR_DARK_GREEN'), 5, AABB_KEYBOARD_WIDTH, AABB_KEYBOARD_HEIGHT, KishiTechJS.AABB.AnchorType.Center, false);
	aabbKeyboard.setXY(canvas.getWidth() * 0.5, canvas.getHeight() * 0.5);
	
	aabbMouse = new KishiTechJS.AABB(context, KishiTechJS.Constants.get('COLOR_DARK_GREEN'), 5, AABB_MOUSE_WIDTH, AABB_MOUSE_HEIGHT, KishiTechJS.AABB.AnchorType.Center, false);
	aabbMouse.setXY(canvas.getWidth() * 0.5, canvas.getHeight() * 0.5);
	
	keyboardLines = [
		new KishiTechJS.Line(context, KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'), 1),
		new KishiTechJS.Line(context, KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'), 1),
		new KishiTechJS.Line(context, KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'), 1),
		new KishiTechJS.Line(context, KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'), 1),
	];
	
	mouseLines = [
		new KishiTechJS.Line(context, KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'), 1),
		new KishiTechJS.Line(context, KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'), 1),
		new KishiTechJS.Line(context, KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'), 1),
		new KishiTechJS.Line(context, KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'), 1),
	];

	setInterval(gameLoop, KishiTechJS.Constants.get('FPS'));
}

function configButtons()
{
	var buttonEN = document.getElementById('button_en');
	var buttonPT = document.getElementById('button_pt');
	
	buttonEN.onclick = function()
	{
		language = 'en';
		loadStrings(language);		
	}
	
	buttonPT.onclick = function()
	{
		language = 'pt'
		loadStrings(language);		
	}
}

function loadStrings(language)
{
	for (var i = 0; i < Object.keys(STRINGS[language]).length; ++i)
	{
		document.getElementById('str_' + i).innerHTML = STRINGS[language]['str_' + i];
	}
}

function gameLoop()
{
	update();
	draw();
}

function update()
{
	updateAABBKeyboard();
	updateLines();
	
	if (checkAABBCollision(aabbMouse, aabbKeyboard))
	{
		aabbKeyboard.setColor(KishiTechJS.Constants.get('COLOR_RED'));
		aabbMouse.setColor(KishiTechJS.Constants.get('COLOR_RED'));
	}
	else
	{
		aabbKeyboard.setColor(KishiTechJS.Constants.get('COLOR_DARK_GREEN'));
		aabbMouse.setColor(KishiTechJS.Constants.get('COLOR_DARK_GREEN'));
	}
}

function draw()
{
	canvas.clear(KishiTechJS.Constants.get('COLOR_GRAY')); 
	
	keyboardLines[0].draw(aabbKeyboard.getLeft(), canvas.getHeight());
	keyboardLines[1].draw(aabbKeyboard.getRight(), canvas.getHeight());
	keyboardLines[2].draw(canvas.getWidth(), aabbKeyboard.getTop());
	keyboardLines[3].draw(canvas.getWidth(), aabbKeyboard.getBottom());
	mouseLines[0].draw(aabbMouse.getLeft(), canvas.getHeight());
	mouseLines[1].draw(aabbMouse.getRight(), canvas.getHeight());
	mouseLines[2].draw(canvas.getWidth(), aabbMouse.getTop());
	mouseLines[3].draw(canvas.getWidth(), aabbMouse.getBottom());

	aabbKeyboard.draw();
	aabbMouse.draw();

	drawAABBInfo();	
	drawInfo();
}

function drawAABBInfo()
{
	context.save();
	context.font = '16px Arial';
	context.fillStyle = KishiTechJS.Constants.get('COLOR_GREEN');
	context.fillText('B', aabbKeyboard.getX(), aabbKeyboard.getY());
	context.fillText('A', aabbMouse.getX(), aabbMouse.getY());
	context.restore();
}

function drawInfo()
{
	context.save();
	context.fillStyle = KishiTechJS.Constants.get('COLOR_WHITE');

	context.save();
	context.font = '16px Arial';
	var isColliding = checkAABBCollision(aabbMouse, aabbKeyboard);  
	context.fillStyle = isColliding ? KishiTechJS.Constants.get('COLOR_RED') : KishiTechJS.Constants.get('COLOR_GREEN');
	var textX = 10;
	var textY = 20;	
	context.fillText(STRINGS_CANVAS[language]['str_0'] + (isColliding), textX, textY);
	context.restore();

	var AisToTheRightOfB = aabbMouse.getLeft() > aabbKeyboard.getRight();
	var AisToTheLeftOfB = aabbMouse.getRight() < aabbKeyboard.getLeft();
	var AisAboveB = aabbMouse.getBottom() < aabbKeyboard.getTop();  
	var AisBelowB = aabbMouse.getTop() > aabbKeyboard.getBottom();

	textY += 20;
	context.fillText(STRINGS_CANVAS[language]['str_1'] + AisToTheRightOfB, textX, textY);
	textY += 10;
	context.fillText(STRINGS_CANVAS[language]['str_2'] + AisToTheLeftOfB, textX, textY);
	textY += 10;
	context.fillText(STRINGS_CANVAS[language]['str_3'] + AisAboveB, textX, textY);
	textY += 10;
	context.fillText(STRINGS_CANVAS[language]['str_4'] + AisBelowB, textX, textY);
	
	textY += 20;
	context.fillText(STRINGS_CANVAS[language]['str_0'] + !AisToTheRightOfB + ' && ' + !AisToTheLeftOfB + ' && ' + !AisAboveB + ' && ' + !AisBelowB, textX, textY);

	textY += 20;
	context.fillText(STRINGS_CANVAS[language]['str_5'], textX, textY);
	textY += 10;
	context.fillText(STRINGS_CANVAS[language]['str_6'], textX, textY);
	textY += 10;
	context.fillText(STRINGS_CANVAS[language]['str_7'], textX, textY);

	context.fillText('http://www.kishimotostudios.com', 10, canvas.getHeight() - 10);
	context.restore();
}

function onMouseMove(event)
{
	var position = canvas.screenToCanvas(event.clientX, event.clientY);
	aabbMouse.setPosition(position);
}

function updateAABBKeyboard()
{
	if (keyboard.isKeyPressed(KishiTechJS.Constants.get('KEY_UP')))
	{	
		aabbKeyboard.incY(-KEYBOARD_MOVE);
	}
	if (keyboard.isKeyPressed(KishiTechJS.Constants.get('KEY_DOWN')))
	{	
		aabbKeyboard.incY(KEYBOARD_MOVE);
	}
	if (keyboard.isKeyPressed(KishiTechJS.Constants.get('KEY_LEFT')))
	{	
		aabbKeyboard.incX(-KEYBOARD_MOVE);
	}
	if (keyboard.isKeyPressed(KishiTechJS.Constants.get('KEY_RIGHT')))
	{	
		aabbKeyboard.incX(KEYBOARD_MOVE);
	}
}

function updateLines()
{
	keyboardLines[0].setXY(aabbKeyboard.getLeft(), 0);
	keyboardLines[1].setXY(aabbKeyboard.getRight(), 0);
	keyboardLines[2].setXY(0, aabbKeyboard.getTop());
	keyboardLines[3].setXY(0, aabbKeyboard.getBottom());
	mouseLines[0].setXY(aabbMouse.getLeft(), 0);
	mouseLines[1].setXY(aabbMouse.getRight(), 0);
	mouseLines[2].setXY(0, aabbMouse.getTop());
	mouseLines[3].setXY(0, aabbMouse.getBottom());

	keyboardLines[0].setColor((aabbKeyboard.getLeft() < aabbMouse.getRight() && aabbKeyboard.getLeft() > aabbMouse.getLeft()) ?
		KishiTechJS.Constants.get('COLOR_RED') : KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'));
	keyboardLines[1].setColor((aabbKeyboard.getRight() < aabbMouse.getRight() && aabbKeyboard.getRight() > aabbMouse.getLeft()) ?
		KishiTechJS.Constants.get('COLOR_RED') : KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'));
	keyboardLines[2].setColor((aabbKeyboard.getTop() < aabbMouse.getBottom() && aabbKeyboard.getTop() > aabbMouse.getTop()) ?
		KishiTechJS.Constants.get('COLOR_RED') : KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'));
	keyboardLines[3].setColor((aabbKeyboard.getBottom() < aabbMouse.getBottom() && aabbKeyboard.getBottom() > aabbMouse.getTop()) ?
		KishiTechJS.Constants.get('COLOR_RED') : KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'));
	
	mouseLines[0].setColor((aabbMouse.getLeft() < aabbKeyboard.getRight() && aabbMouse.getLeft() > aabbKeyboard.getLeft()) ?
		KishiTechJS.Constants.get('COLOR_RED') : KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'));
	mouseLines[1].setColor((aabbMouse.getRight() < aabbKeyboard.getRight() && aabbMouse.getRight() > aabbKeyboard.getLeft()) ?
		KishiTechJS.Constants.get('COLOR_RED') : KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'));
	mouseLines[2].setColor((aabbMouse.getTop() < aabbKeyboard.getBottom() && aabbMouse.getTop() > aabbKeyboard.getTop()) ?
		KishiTechJS.Constants.get('COLOR_RED') : KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'));
	mouseLines[3].setColor((aabbMouse.getBottom() < aabbKeyboard.getBottom() && aabbMouse.getBottom() > aabbKeyboard.getTop()) ?
		KishiTechJS.Constants.get('COLOR_RED') : KishiTechJS.Constants.get('COLOR_LIGHT_GRAY'));
}

function checkAABBCollision(aabb1, aabb2)
{
	return !(aabb1.getLeft() > aabb2.getRight() // AisToTheRightOfB
		|| aabb1.getRight() < aabb2.getLeft() // AisToTheLeftOfB
		|| aabb1.getBottom() < aabb2.getTop() // AisAboveB
		|| aabb1.getTop() > aabb2.getBottom()); // AisBelowB
}
