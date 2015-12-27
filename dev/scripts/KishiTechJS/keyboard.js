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

KishiTechJS.Keyboard = function()
{
	this.pressedKeys = KishiTechJS.Constants.get('KEY_NONE');
}

KishiTechJS.Keyboard.prototype =
{
	constructor: KishiTechJS.Keyboard,

	isKeyPressed: function(keyCode)
	{
		return keyCode & this.pressedKeys;
	},
	
	onKeyDown: function(event)
	{
		switch (event.keyCode)
		{
			case KishiTechJS.Constants.get('KEYCODE_UP'):
			case KishiTechJS.Constants.get('KEYCODE_W'):
				this.pressedKeys |= KishiTechJS.Constants.get('KEY_UP');
				break;
			case KishiTechJS.Constants.get('KEYCODE_DOWN'):
			case KishiTechJS.Constants.get('KEYCODE_S'):
				this.pressedKeys |= KishiTechJS.Constants.get('KEY_DOWN');
				break;
			case KishiTechJS.Constants.get('KEYCODE_LEFT'):
			case KishiTechJS.Constants.get('KEYCODE_A'):
				this.pressedKeys |= KishiTechJS.Constants.get('KEY_LEFT');
				break;
			case KishiTechJS.Constants.get('KEYCODE_RIGHT'):
			case KishiTechJS.Constants.get('KEYCODE_D'):
				this.pressedKeys |= KishiTechJS.Constants.get('KEY_RIGHT');
				break;
		}
	},	
	
	onKeyUp: function(event)
	{
		switch (event.keyCode)
		{
			case KishiTechJS.Constants.get('KEYCODE_UP'):
			case KishiTechJS.Constants.get('KEYCODE_W'):
				this.pressedKeys &= ~KishiTechJS.Constants.get('KEY_UP');
				break;
			case KishiTechJS.Constants.get('KEYCODE_DOWN'):
			case KishiTechJS.Constants.get('KEYCODE_S'):
				this.pressedKeys &= ~KishiTechJS.Constants.get('KEY_DOWN');
				break;
			case KishiTechJS.Constants.get('KEYCODE_LEFT'):
			case KishiTechJS.Constants.get('KEYCODE_A'):
				this.pressedKeys &= ~KishiTechJS.Constants.get('KEY_LEFT');
				break;
			case KishiTechJS.Constants.get('KEYCODE_RIGHT'):
			case KishiTechJS.Constants.get('KEYCODE_D'):
				this.pressedKeys &= ~KishiTechJS.Constants.get('KEY_RIGHT');
				break;
		}
	},	
}
