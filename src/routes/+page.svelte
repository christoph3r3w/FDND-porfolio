<script lang="ts">
	/** @type {import('./$types').PageData} */
	// import gsap from "gsap";
	// import LocomotiveScroll from 'locomotive-scroll';
	// import '../styles/main.css';
	// const locomotiveScroll = new LocomotiveScroll();
	let data : any = $props();
	let {peep} =  data.data || [];
</script>

<svelte:head>
	<title>Profile card</title>
	<link rel="preload" href="https://brilletjes-squad-page.onrender.com" as="document">
	<link rel="preload" href="https://proof-of-concept-for-merlin.vercel.app/brew" as="document">
</svelte:head>

<main>
	<section id="cover-1" class="covers" >
		<a href="#cover-2" class="frame">
			<div class="pics-container">
				<!-- <span class="profile profile-1">
					<img  src="{peep.avatar}" alt="">
				</span> -->
				<span class="profile profile-2 flower" >
					<img src="/25acb22a-22a3-41d5-a0eb-c91529c4c6c8.jpg" width=300 alt="image of {peep.name}">
					<!-- <img src="https://portfolio-lti-production.s3.eu-west-1.amazonaws.com/cvq44juv5nrywjfbnlgdrwaweabo?response-content-disposition=inline%3B%20filename%3D%226992026a-4ec4-4399-a36a-c18411945cb2.JPG%22%3B%20filename%2A%3DUTF-8%27%276992026a-4ec4-4399-a36a-c18411945cb2.JPG&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZUHNSBLFH5JMYGQV%2F20240915%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240915T210806Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=131003c97f68d35b7ea57099e9da85018ae1decef2bad55b4a8a12c7fc12e219" width=300 alt="image of {peep.name}"> -->
				</span>

			</div>
			
			<h1 class="name">{peep.name} {peep.surname}</h1>
		</a>
	</section>
	<section id="cover-2" class="covers " >
		<a href="#cover-3" class="frame">
			<div class="side-info scalloped-box">
				<ul>
					<li> squad-id {peep.squad_id}</li>
					<li> role {peep.role}</li>
					<li> hobbies {peep.hobbies}</li>
					<li> and more </li>
				</ul>
			</div>
			<div class="bio">
				{#if peep}
				<p> {peep.bio}</p>
				{:else}
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem vero nobis perferendis, quas id! Debitis nostrum, delectus culpa voluptates veritatis voluptatibus earum ratione dignissimos id magni, inventore molestiae ducimus.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem vero nobis perferendis, quas id! Debitis nostrum, delectus culpa voluptates veritatis voluptatibus earum ratione dignissimos id magni, inventore molestiae ducimus.
				</p>
				{/if}
			</div>
			<div class="side-pic">
				<img src="/IMG_8452.JPEG" alt="{peep.name}">
			</div>
			<!-- <div class="about-shape scalloped-box">

			</div> -->
		</a>
	</section>
	<section id="cover-3" class="covers frame" >
		
			<section class="mainG">
				<article class="top top_1">
					<iframe title="potion mixing game" src="https://proof-of-concept-for-merlin.vercel.app/brew" frameborder="0" tabindex="-1"></iframe>
				</article>  
				<article class="top top_2">2</article>
				<article class="top top_3">3</article>
					
				<article class="mid mid_1">4</article>  
				<article class="mid mid_2">
					<a href="#cover-5" class="frame stamp" style="color: transparent;">
						next
					</a>
				</article>
				<article class="mid mid_3">6</article>
					
				<article class="down down_1">
					<a href="https://github.com/christoph3r3w">
						<img src="/GitHub_Logo.png" alt="github logo" width="300">
					</a>
				</article>  
				<article class="down down_2">
					<iframe title="shader" height="300" style="width: 100%;" scrolling="no" src="https://codepen.io/Christopher-the-animator/embed/NWmxrpY?default-tab=" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" tabindex="-1">
						See the Pen <a href="https://codepen.io/Christopher-the-animator/pen/NWmxrpY">
						Untitled</a> by Christopher (<a href="https://codepen.io/Christopher-the-animator">@Christopher-the-animator</a>)
						
					  </iframe>				
				</article>
				<article class="down down_3">
					<iframe title="brilletjes squad page" src="https://brilletjes-squad-page.onrender.com" tabindex="-1"></iframe>
				</article>
			</section> 
		
	</section>
	<!-- <section id="cover-4" class="covers" tabindex="0">
		<a href="#cover-5" class="frame">4</a>
	</section> -->
	<section id="cover-5" class="covers" >
		<a href="#cover-1" class="frame">
			
			<ul>
				<li>insta</li>
				<li>github</li>
				<li>linkedin</li>
				<li>arena</li>
			</ul>

			<div>
				<!-- <p>profile card semester 13</p> -->
			</div>
		</a>
	</section>
</main>



<style>
	
	/* @import 'node_modules/locomotive-scroll/dist/locomotive-scroll'; */

/*  Only necessary with horizontal scrolling */ 

*,
*::before,
*::after,
html,
:global(body){
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  appearance: none;
  text-decoration: none;
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
  scrollbar-width: thin;  

  	--first-color: #2e94b9; 	
	--second-color : #fffdc1; 
	--third-color : #f0b775; 
	--fourth-color : #d25565; 


}




main{
	position: relative;
	width: 100%;
	height: 100vh;
	/* background-color: rgba(88, 88, 88, 0.5); */
	/* overflow-x: scroll ; */
	overflow-y: hidden;
	background-image: url(/Passepartout_Fotografie-Studio_Italy-47-brushed-3840x2550.jpg);
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;
	z-index: 0;
}

main::before{
	content: '';
	position: absolute;
	inset: 0;
	z-index: -1;
	backdrop-filter: blur(13px);

}

main {
	
	display: flex;
	/* flex-direction: row; */
	background-color: rgba(212, 212, 212, 0.741);
	overflow-x: auto;
	overflow-y: hidden;
	scroll-snap-type: inline mandatory;
	scroll-behavior: smooth;
	z-index: 1;
}

.covers{
	position: relative;
	display: flex;
	flex: 0 0 100vw;
	width: 100vw;
	height: 100vh;
	/* outline: solid blue; */
	scroll-snap-align:center;
	scroll-snap-stop:always;
	
	/* margin-inline: 2.5px; */
	scroll-margin-inline: 2.5px;
	align-items: center;
    justify-content: center;
    font-size: 3rem;
	border-radius: 13px;
	transition: .2s ease-in-out;
	/* scale: 1; */

	@starting-style{
		background-color:black;
		scale:0.3;
	}
}

#cover-1{--color:var(--first-color); background-color:var(--color);color: var(--color);}
#cover-2{--color:var(--second-color); background-color:var(--color);color: var(--color);}
#cover-3{--color:var(--third-color); background-color:var(--color);color: var(--color);}
#cover-4{--color:var(--fourth-color); background-color:var(--color);color: var(--color);}
#cover-5{--color:var(); background-color:var(--color);color: var(--color); outline: solid black;}

.covers .frame{
	display: grid;
	width: 100%;
	height:100%;
	/* background-color: whitesmoke ; */
	scroll-behavior: smooth;
	/* place-content: center ; */
	/* color: transparent; */

	&:is(:global(:visited,:focus,:active)){
		color: unset;
	}
}

.covers:has(:global(:active,:focus-within)){
	transform: scale(.6) translateX(13vw);
	transition: .5s ease-in-out;
	
	/* & + li{
		transition: .2s ease-in-out;
		transform: translateX(-23vw) scale(.6);
	} */

}

/* li:is(:global(:visited,:focus,:active)){
	transition: 2s;
} */

/* li:has(:global(:not(.frame:active))){
	transform: translateX(0) scale(1);
	transition: .2s ease-in-out;

	&:not(li:has(a:active)){
		transition: .2s ease-in-out;
		transform: translateX(-23vw) scale(.9);
	}
} */

.covers::after{
	position: absolute;
	inset: 20%;
	display: grid;
	place-content: center;
	color: rgba(0, 0, 0, 0.285);
	mix-blend-mode: multiply;
	/* outline: solid; */
	font-size: 15rem;
	pointer-events: none;
}

.covers:hover::after {
	filter: blur(3px);
	transition: 1s ease-in-out .5s;
}

#cover-3::after{
	filter: blur(0px);
}

#cover-1::after{content: '';}
#cover-2::after{content: 'about';}
#cover-3::after{content: 'work';}
#cover-4::after{content: 'school';}
#cover-5::after{content: 'profile card sprint 13';}


/* ///////////// */
/* intro section */
/* ///////////// */
#cover-1 a {
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	/* background-color: yellow; */
}

#cover-1 a .pics-container{
	position: relative;
	grid-row: 1/2;
	grid-column: 1/-1;
	width: 100%;
	/* height: 100%; */
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	/* outline: solid rgba(127, 255, 212, 0.486); */
	justify-content: flex-end;
}


.pics-container span {
	--inner-size: 20vw;
	position: relative;
	background-color:  red;
	/* padding-block: calc(var(--inner-size) * .11 ); */
	translate: 0 13% ;
	margin-inline: calc(var(--inner-size) * .5 );

	width: var(--inner-size);
	height: var(--inner-size);
	
	outline: solid rgba(206, 25, 25, 0.81);
	
}

.profile img{
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	/* scale: 3; */

}

.flower {
  width: 5vw; /* adjust to control the size */
  aspect-ratio: 1;
  --g:/25.486% 25.486% radial-gradient(#000 calc(71% - 1px),#0000 71%) no-repeat;
  mask: 100% 50% var(--g),88.302% 82.139% var(--g),58.682% 99.24% var(--g),25% 93.301% var(--g),3.015% 67.101% var(--g),3.015% 32.899% var(--g),25% 6.699% var(--g),58.682% 0.76% var(--g),88.302% 17.861% var(--g),radial-gradient(100% 100%,#000 35.01%,#0000 calc(35.01% + 1px));
	transition: 1.5s;
}

#cover-1:has(:global(.frame:active,.frame:focus-within)) :is(:global(.profile-2)){

	--inner-size: 30vw;
	&img{
		scale: 1;
		transition: 1.5s;
	}

	&.flower{
		
		--g:/25.486% 25.486% radial-gradient(#000 calc(71% - 1px),#0000 71%) no-repeat;
  		mask: 100% 50% var(--g),88.302% 82.139% var(--g),58.682% 99.24% var(--g),25% 93.301% var(--g),3.015% 67.101% var(--g),3.015% 32.899% var(--g),25% 6.699% var(--g),58.682% 0.76% var(--g),88.302% 17.861% var(--g),radial-gradient(100% 100%,#000 35.01%,#0000 calc(35.01% + 1px));
		scale: 1.5;
		rotate: 15deg;
		translate: 0 -6vw;
	}
	
}

.name{
	position: relative;
	width: 100%;
	height: min-content;
	grid-row: 2;
	grid-column: 1/ -1;
	z-index: 2;
	font-size:clamp(1rem, -10rem + 56vw, 14rem);
	font-weight: normal;
	pointer-events: none;
	mix-blend-mode: multiply;
}


/* //////////////////// */
/* cover 2 about section */
/* ///////////////////// */
#cover-2 a{
	grid-template-columns: 1fr 2fr;
	grid-template-rows: 1fr 1fr 1.5fr;
	color: initial;
	mix-blend-mode:luminosity;

}

#cover-2:is(:global(:active,:focus-within)) img{
		opacity: 1;
		right: -10%;
		top: -20%;
		transition: 1s ease-in-out;
		z-index: 4;
		mix-blend-mode:darken;
}

.side-info{
	grid-column: 1/2;
	grid-row: 3/-1;
	place-self: center;
	margin: 5%;
}

.side-info ul{
	width: 100%;
	height: 100%;
	display: grid;
	place-content: center;
	
}

.bio{
	grid-column: 2/-1;
	grid-row: 2/-1;
	padding: 3%;
	overflow: hidden;
	/* font-size: clamp(1rem, -12rem + 16vw, 9rem); */
	z-index: 2;
}

.side-pic{
	position: relative;
	grid-column: 2/-1;
	grid-row: 1/-1;
	place-self: center;
	width: 100%;
	height: 100%;
	mix-blend-mode: difference;
}

.side-pic img{
	position: absolute;
	right: 0;
	width: 40%;
	height: auto;
	object-fit: cover;
	object-position: center;
	opacity: .5;
	mix-blend-mode: multiply;
}


.scalloped-box {
  --r: 30px; /* radius of circles */
  height: 350px;
  aspect-ratio: 1;
  padding: calc(1.5*var(--r));
  background: #e97f02;
  mask: 
    linear-gradient(#000 0 0) no-repeat
     50%/calc(100% - 2*var(--r)) calc(100% - 2*var(--r)), 
    radial-gradient(farthest-side,#000 97%,#0000) 
     0 0/calc(2*var(--r)) calc(2*var(--r)) round;
}


/* //////////////////////// */
/* coner 3 grid for works */
/* ///////////////////////// */
#cover-3{
	display: flex;
}

#cover-3.frame{
	position:relative;
	display:grid;
  	width: 100%;
  	height:100%;
  	grid-template-columns:
	
    [side-start]
    1fr
    [mid-start]
    1fr
    [mid-end]
    1fr
    [side-end];

   grid-template-rows:

    [side-start]
    1fr
    [mid-start]
    1fr
    [mid-end]
    1fr
    [side-end];
  
	transition:1s;
	color:rgb(0, 0, 0);
	perspective: 3000px;
	padding:1rem;
  	height:100%;
  	gap:1rem;
  
	/*   &:has(:global(:hover)) section{
    transform: rotateY(-25deg) rotateX(65deg)           scale(.6);
  } */

}

#cover-3 section.mainG{
	position: relative;
	grid-column:1/-1;
	grid-row:1/-1;
	display:grid;
	grid-template-columns:subgrid;
	grid-template-rows:subgrid;
	transition: 1s ease-in-out;
	transform-origin: right;
	transform: rotateY(-70deg) rotateX(0deg) scale(1);
	margin-left: 6%;
 
	/* outline:solid rgb(45, 41, 41); */
  	/* transform: rotateY(-20deg) rotateX(45deg)scale(.6); */
  
  &:hover{
     transform: rotateY(0deg) rotateX(0deg)scale(1);
  }
}

/* use @scope to controle which div you want to target */
.mainG article:nth-of-type(n){
 		/* inset: 20dvw; */
		--radius:3rem;

		position: relative;
  		display:grid;
	  	width:100%;
  		place-items:center;
  		font-size:3rem;
	  	/* box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.351); */
		border-radius: var(--radius);
		opacity: .3;
		filter: blur(2.5px) grayscale(10);
		z-index: 0;
		outline:solid lightslategrey;
		/* outline:solid rgba(0, 0, 0, 0.473); */
	  	/* grid-column: mid; */
	
		&:hover{
			opacity: 1;
			filter: blur(0);
			z-index: 3;
		}
  
}

/* iframe styling */
.mainG article:is(:global(.mid_3,.top_2,.top_3)){
	display: none;
}

.mainG article.down_3{
	grid-column:3/-1;
	grid-row:2/-1;
}

.mainG article.down_3 iframe{
	position: absolute;
	/* inset: 3%; */
	height: 100%;
	width: 100%;
	border-radius: var(--radius);

}

.mainG article.top_1{
	grid-column:1/4;
	grid-row:1/2;
}

.mainG article.top_1 iframe{
	position: absolute;
	/* inset: 3%; */
	height: 100%;
	width: 100%;
	border-radius: var(--radius);

}

.mainG article.mid_2{
	outline: none;
}

.mainG article.down_2{
	border-radius: var(--radius);
	outline: none;
}

.mainG article.down_2 iframe{
	border-radius: var(--radius);
	width: auto;
	height: 100%;
}

.mainG article.down_1 img{
	width: 100%;
	height: 100%;

}

/* .move{
  grid-column:side;
} */

/* HTML: <div class="stamp"></div> */
.stamp {
  	--r: 15px; /* control the radius */
	width: 100%;
  	height: 100%;
  	/* aspect-ratio: 1.5; */
  	padding: calc(2*var(--r));
  	background: rgba(91, 154, 216, 0.61);
  	/* outline: solid #b3b39cb8; */
  mask: 
    radial-gradient(var(--r),#0000 97%,#000) round 
     calc(-1.5*var(--r)) calc(-1.5*var(--r))/calc(3*var(--r)) calc(3*var(--r)), 
    linear-gradient(#000 0 0) no-repeat 50%/calc(100% - 3*var(--r)) calc(100% - 3*var(--r));
}

.box {
  --mask: radial-gradient(40px at 40px 40px,#0000 98%,#000) -40px -40px;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}

/* grid controls */
 #cover-3:has(:global(.top:hover,:focus-within)){
      
  	&:has(:global(.top_1:hover,:focus)){
       grid-template-columns:5fr 1fr 3fr;
       grid-template-rows:5fr 1fr 1fr;
	   &::after{
			content: 'Merlin';
		}
     }
   	&:has(:global(.top_2:hover)){
		background-color: #000;
       grid-template-columns: 1fr 2.5fr 1fr;
        grid-template-rows:2.5fr 1fr 1fr;
     }
   	&:has(:global(.top_3:hover)){
       background-color:#EDA48D;
       grid-template-columns: 1fr  1fr 2.5fr;
       grid-template-rows:2.5fr 1fr 1fr;
     }
    
}
   
#cover-3:has(:global(.mid:hover,:focus-within)){
    	&:has(:global(.mid_1:hover)){
       		grid-template-columns:2.5fr 1fr 1fr;
       		grid-template-rows: 1fr 2.5fr 1fr;

		
     	}
   		&:has(:global(.mid_2:hover)){
       		background-color:rgba(0, 0, 255, 0.411);
       		grid-template-columns: 1fr 1fr 1fr;
       		grid-template-rows: 1fr 1fr 1fr;
			/* transition-property: background-color , color,grid; */
			/* transition: .1s; */
			
		   	&::after{
			content: 'Next';
			color: aliceblue;
			mix-blend-mode:lighten;

			}
     
     }
   		&:has(:global(.mid_3:hover)){
       	grid-template-columns: 1fr  1fr 2.5fr;
       	grid-template-rows: 1fr 2.5fr 1fr;
     }
}

#cover-3:has(:global(.down:hover,:focus-within)){
      	&:has(:global(.down_1:hover)){
			/* background-color: #0d111774; */
       		grid-template-columns:1fr 1fr 1fr;
       		grid-template-rows: 1fr 1fr 2fr;
			   &::after{
					content: 'school work';
				}
     }
   		&:has(:global(.down_2:hover,:focus-within,:active)){
       		/* background-color:blue; */
       		grid-template-columns: 1fr 2.5fr 1fr;
        	grid-template-rows: 1fr  1fr 8fr;
			&::after{
				content: 'Shaders';
			}
     }
   		&:has(:global(.down_3:hover,:focus-within)){
			background-color:#EDA48D;
       		grid-template-columns: 1fr  1fr 2.5fr;
        	grid-template-rows: 1fr  1fr 2.5fr;

		&::after{
			content: 'windows xp';
		}
     }
}
  

#cover-3:has(:global(article:nth-of-type(n):hover)){
   
	&article:nth-of-type(n):hover{
	background-color:lightyellow;
	color:transparent;
	border-radius:5px;
	transition: .1s;
  
    &.mid_2{
      display:grid;
      grid-template-columns:1fr 1fr;
      grid-template-rows: 1fr 1fr;
      transition: .1s;
      color:black;
      & >div{
        width:100%;
        height:100%;
      }
    }
    
  
    &.move{
      grid-column:side;
    }
  }
}

/* ////////////// */
/* cover 5 ending */
/* ////////////// */

#cover-5{
	display:grid;
	grid-template-columns: 5fr 1fr ;
	grid-template-rows: 1fr ;
}

#cover-5::after{
	font-size: 9rem;
	filter: blur(1px);
}

#cover-5 a{
	display: grid;
	grid-template-columns: subgrid;
	grid-template-rows: subgrid;
	grid-column: 1/-1;
	grid-row: 1/-1;
	height: 100%;
	
}

#cover-5 ul{
	grid-column: 2/3;
	grid-row: 1/-1;
	display: flex;
	flex-direction: column;
	place-content:end ;
	color: #ffffffc1;
}

#cover-5 div{
	width: 100%;
	height: 100%;
	grid-column: 1/2;
	grid-row: 1/-1;
	display: flex;
	flex-wrap: wrap;
	overflow-wrap: break-word;
}

#cover-5 div:has(:global(p)){
	/* mix-blend-mode:multiply; */
	/* font-size:clamp(5rem,19vw,10rem); */
	/* outline: solid red; */

}


</style>