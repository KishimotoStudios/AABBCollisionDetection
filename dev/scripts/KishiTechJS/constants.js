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

KishiTechJS.Constants = function()
{
	var privateConstants =
	{
		'COLOR_BLACK': '#000',
		'COLOR_WHITE': '#fff',
		'COLOR_GRAY': '#555',
		'COLOR_LIGHT_GRAY': '#999',
		'COLOR_DARK_RED': '#900',
		'COLOR_DARK_GREEN': '#090',
		'COLOR_DARK_BLUE': '#009',
		'COLOR_RED': '#F00',
		'COLOR_GREEN': '#0F0',
		'COLOR_BLUE': '#00F',
		'COLOR_YELLOW': '#990',

		'KEY_NONE': 0,
		'KEY_UP': 1,
		'KEY_DOWN': 2,
		'KEY_LEFT': 4,
		'KEY_RIGHT': 8,
		'KEY_SPACE': 16,

		'KEYCODE_SPACE': 32,
		'KEYCODE_UP': 38,
		'KEYCODE_DOWN': 40,
		'KEYCODE_LEFT': 37,
		'KEYCODE_RIGHT': 39,
		'KEYCODE_W': 87,
		'KEYCODE_A': 65,
		'KEYCODE_S': 83,
		'KEYCODE_D': 68,
		
		'MOUSE_LEFT': 1,
		'MOUSE_MIDDLE': 2,
		'MOUSE_RIGHT': 3,
		
		'FPS': 30,
	};
	
	var returnConstant = function(constantName)
	{ 
		return privateConstants[constantName];
	};
	
	var degToRadFunction = function(degValue)
	{
		return degValue * (Math.PI / 180.0);
	}
	
	var radToDegFunction = function(radValue)
	{
		return radValue * (180.0 / Math.PI);
	}
	
	var get360DegInRadFunction = function()
	{
		return 2 * Math.PI;
	}
	
	var exposed =
	{
		get: returnConstant,
		degToRad: degToRadFunction,
		radToDeg: radToDegFunction,
		get360DegInRad: get360DegInRadFunction,
	};
	
	return exposed;
}();
