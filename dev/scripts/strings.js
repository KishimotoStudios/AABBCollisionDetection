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

STRINGS = {
	"en": {
		"str_0": "AABB 2D Collision Detection",
		"str_1": "An example showing how to detect collision between two AABB (Axis-Aligned Bounding Box) in 2D (uses HTML5/JS).",
		"str_2": "The idea",
		"str_3": "Two rectangles that are [XY] axis aligned do not collide if they are separated along an axis. If they overlap on both axes then they collide.",
		"str_4": "The code",
		"str_5": "Brief explanation",
		"str_6": "If the AABB of an object A is entirely to the right or to the left of the AABB of an object B, then both AABBs are not colliding in the X-axis. When the AABB of an object A is above or below the AABB of an object B, both AABBs are not colliding in the Y-axis.<br/>Only when these four cases are false that both AABBs collide (there is an overlap).<br/>For a 3D version, simply add the Z-axis and you should end up with two more cases to check (A is in front of B, A is behind B).",
		"str_7": "A note about the code",
		"str_8": "The code in this page is written for readability and is not optimized (i.e. you don't need to save the checks in variables). You can find the modified and optimized version in <span class=\"code\">main.js</span> as well as in <span class=\"code\">KishiTechJS/aabb.js</span>.",
		"str_9": "Contact",
		"str_10": "We hope you enjoyed this article and let us know your thoughts about it! Reach us on <a href=\"http://twitter.com/KishimotoStudio\">Twitter</a> and <a href=\"http://facebook.com/KishimotoStudios\">Facebook</a>.", 
		"str_11": "<a href=\"https://github.com/KishimotoStudios/AABBCollisionDetection\" title=\"Source code\">[Get the source code at GitHub]</a>",
		"str_12": "Copyright &copy; 2015, Kishimoto Studios. All Rights Reserved.",
		"str_13": "More collision detection",
		"str_14": "We also wrote a circle-circle collision detection article, which you can <a href=\"http://kishimotostudios.com/articles/circle_collision/\">check out here</a>.",
	},		
	"pt": {
		"str_0": "Detecção de Colisão 2D AABB",
		"str_1": "Um exemplo mostrando como detectar colisão entre dois AABB (Axis-Aligned Bounding Box) em 2D (usando HTML5/JS).",
		"str_2": "A ideia",
		"str_3": "Dois retângulos alinhados nos eixos [XY] não colidem caso estejam separados em um dos eixos. Eles colidem caso se sobreponham em ambos os eixos.",
		"str_4": "O código",
		"str_5": "Breve explicação",
		"str_6": "Se o AABB (contorno do objeto alinhado nos eixos) de um objeto A estiver totalmente à direita ou esquerda do AABB de um objeto B, então os AABBs não colidem no eixo X. Quando o AABB de um objeto A estiver totalmente acima ou abaixo do AABB de um objeto B, ambos AABBs não colidem no eixo Y.<br/>Somente quando estes quatro casos são falsos é que os dois AABBs colidem (há sobreposição).<br/>Para uma versão 3D, basta incluir o eixo Z e você terá mais dois casos para checar (A está na frente de B, A está atrás de B).",
		"str_7": "Nota sobre o código",
		"str_8": "O código nesta página foi escrito para ser legível e não está otimizado (i.e. você não precisa salvar as checagens em variáveis). Você pode ver a versão modificada e otimizada no arquivo <span class=\"code\">main.js</span> assim como em <span class=\"code\">KishiTechJS/aabb.js</span>.",
		"str_9": "Contato",
		"str_10": "Esperamos que tenha gostado deste artigo, nos diga o que achou! Entre em contato via <a href=\"http://twitter.com/KishimotoStudio\">Twitter</a> e <a href=\"http://facebook.com/KishimotoStudios\">Facebook</a>.", 
		"str_11": "<a href=\"https://github.com/KishimotoStudios/AABBCollisionDetection\" title=\"Código-fonte\">[Obtenha o código-fonte no GitHub]</a>",
		"str_12": "Copyright &copy; 2015, Kishimoto Studios. Todos os Direitos Reservados.",		 
		"str_13": "Mais detecção de colisão",
		"str_14": "Também escrevemos um artigo sobre detecção de colisão entre círculos, que você pode <a href=\"http://kishimotostudios.com/articles/circle_collision/\">ler aqui</a>.",
	}
};

STRINGS_CANVAS = {
	"en": {
		"str_0": "Collision between rectangles? ",
		"str_1": "Is A to the right of B ? ",
		"str_2": "Is A to the left of B ? ",
		"str_3": "Is A above B ? ",
		"str_4": "Is A below B ? ",
		"str_5": "[usage]",
		"str_6": "Mouse: move smaller rectangle.",
		"str_7": "WADS/Arrows: move larger rectangle.",
	},
	"pt": {
		"str_0": "Colisão entre retângulos? ",
		"str_1": "A está à direita de B ? ",
		"str_2": "A está à esquerda de B ? ",
		"str_3": "A está acima de B ? ",
		"str_4": "A está abaixo de B ? ",
		"str_5": "[uso]",
		"str_6": "Mouse: move retângulo menor.",
		"str_7": "WADS/Setas: move retângulo maior.",
	}
}