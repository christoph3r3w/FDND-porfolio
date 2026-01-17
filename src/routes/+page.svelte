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
	<link rel="preload" href="https://brilletjes-squad-page.vercel.app/#info" as="document">
	<link rel="preload" href="https://proof-of-concept-for-merlin.vercel.app/brew" as="document">
	<link rel="preload" href="https://accessibilitytool.vercel.app/" as="document">
	<link rel="preload" href="https://github.com/christoph3r3w" as="document">
	<link rel="preload" href="https://codepen.io/Christopher-the-animator/embed/NWmxrpY?default-tab=" as="document">
</svelte:head>

<main>
	<section id="cover-1" class="covers" >
		<a href="#cover-2" class="frame">
			<div class="pics-container">
				<span class="profile profile-2 flower" >
					<img src="/25acb22a-22a3-41d5-a0eb-c91529c4c6c8.jpg" width=300 alt="image of {peep.name}">
				</span>
			</div>
			
			<h1 class="name">{peep.name} {peep.surname}</h1>
		</a>
	</section>
	<section id="cover-2" class="covers " >
		<a href="#cover-3" class="frame">
			<div class="side-info scalloped-box">
				<ul>
					<img src="chris icon lowlowres.png" alt="lil chris">
					<li> Reading a {peep.fav_book_genre} atm</li>
					<li> Mostly an {peep.most_energy} person</li>
				</ul>
			</div>
			<div class="bio ">
				{#if peep}
					<p> {peep.bio}</p>
				{:else}
					<p class="stamp">loading...</p>
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
				<article class="top top_1" data-name="Merlin">
					<a href="https://proof-of-concept-for-merlin.vercel.app/brew" aria-label="link to project"></a>
					<iframe title="potion mixing game" src="https://proof-of-concept-for-merlin.vercel.app/brew" frameborder="0" tabindex="-1"></iframe>

				</article>  
				<article class="top top_2">2</article>
				<article class="top top_3">3</article>
					
				<article class="mid mid_1" data-name="A11y tool">
				<a href="https://accessibilitytool.vercel.app/" aria-label="link to project"></a>
					<iframe title="A11y tool concept" src="https://accessibilitytool.vercel.app/" frameborder="0" loading="lazy" tabindex="-1"></iframe>
				</article>  
				<article class="mid mid_2">
					<a href="#cover-5" class="frame stamp" style="color: transparent;">
						next
					</a>
				</article>
				<article class="mid mid_3">6</article>
					
				<article class="down down_1" data-name="github">
					<a href="https://github.com/christoph3r3w">
						<img src="/GitHub_Logo.png" alt="github logo" width="300">
					</a>
				</article>  
				<article class="down down_2" data-name="Shaders">
					<a href="https://codepen.io/Christopher-the-animator/pen/NWmxrpY" aria-label="link to project"></a>	
					<iframe title="shader experiments" src="https://codepen.io/Christopher-the-animator/embed/NWmxrpY?default-tab=" frameborder="0" loading="lazy" tabindex="-1"></iframe>			
				</article>
				<article class="down down_3" data-name="Windows XP">
					<a href="https://brilletjes-squad-page.vercel.app/#info" aria-label="link to project"></a>
					<iframe title="brilletjes squad page" src="https://brilletjes-squad-page.vercel.app/#info" tabindex="-1"></iframe>
				</article>
			</section> 
		
	</section>
	<!-- <section id="cover-4" class="covers" tabindex="0">
		<a href="#cover-5" class="frame">4</a>
	</section> -->
	<section id="cover-5" class="covers" >
		<a href="#cover-1" class="frame">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M21.7501 12C21.7501 12.414 21.4141 12.75 21.0001 12.75H4.81115L10.5311 18.47C10.8241 18.763 10.8241 19.238 10.5311 19.531C10.3851 19.677 10.1931 19.751 10.0011 19.751C9.80909 19.751 9.61706 19.678 9.47106 19.531L2.47106 12.531C2.40206 12.462 2.3472 12.3791 2.3092 12.2871C2.2332 12.1041 2.2332 11.8971 2.3092 11.7141C2.3472 11.6221 2.40206 11.539 2.47106 11.47L9.47106 4.46999C9.76406 4.17699 10.2391 4.17699 10.5321 4.46999C10.8251 4.76299 10.8251 5.23803 10.5321 5.53103L4.81213 11.251H21.0001C21.4141 11.25 21.7501 11.586 21.7501 12Z" fill="#2A2A2A"/>
			</svg>
		</a>
		<ul>
			<!-- <li><a style="--link-color:#E1306C;" href="#">instagram</a></li> -->
			<li><a style="--link-color:;" href="#">instagram</a></li>
			<li><a style="--link-color:#212830;" href={peep.website}> github</a></li>
			<li><a style="--link-color:#0a66c2;" href="https://www.linkedin.com/in/christopher-willems-83238b196/">linkedin</a></li>
			<li><a style="--link-color:#01940c;" href="https://www.are.na/christopher-willems/channels">are.na</a></li>
		</ul>
		<div>
			<!-- <p>profile card semester 13</p> -->
		</div>
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

#cover-1{--color:var(--first-color);}
#cover-2{--color:var(--second-color);}
#cover-3{--color:var(--third-color);}
#cover-5{--color:var(--fourth-color);outline: solid black;}
.covers {background-color:var(--color);color: var(--color);}

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
#cover-5::after{content: 'more';}


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
	grid-row: 3/span 1;
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

	p{
		font-size: clamp(1rem,  2ex, 3rem);
		line-height: 1.2;
		/* color: blue !important; */
		padding: 3%;
		transition: 1s ease;
		border-radius:70px ;
		corner-shape: superellipse(0);

	}

	p:hover{
		background-color: color-mix(in srgb, var(--second-color) 30%, rgba(255, 255, 255, 0.708));
		background-color: color-mix(in srgb, hsl(59, 23%, 63%) 100%, rgba(255, 255, 255, 0.936));
		background-color: color-mix(in srgb, hsl(60, 13%, 20%) 100%, rgba(255, 255, 255, 0.936));
		backdrop-filter: blur(15px) brightness(1.7);
		z-index: 500;
		color: white;
	}
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
  --r: 20px; 
  border-radius: 100px;
  corner-shape: superellipse(2);
  height: 350px;
  padding: calc(1.9 * var(--r));
  background: #e97d02d2;
  color: var(--second-color);
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
  
	transition: 1.5s linear(0, 0.003 0.4%, 0.011 0.8%, 0.026 1.3%, 0.05 1.9%, 0.097 2.9%, 0.227 5.4%, 0.292 6.7%, 0.356 8.1%, 0.416 9.5%, 0.463 10.7%, 0.506 11.9%, 0.549 13.2%, 0.588 14.5%, 0.631 16.1%, 0.673 17.8%, 0.711 19.6%, 0.746 21.4%, 0.777 23.3%, 0.806 25.3%, 0.833 27.4%, 0.858 29.7%, 0.879 32%, 0.897 34.4%, 0.915 37%, 0.929 39.7%, 0.942 42.6%, 0.953 45.7%, 0.963 49%, 0.971 52.6%, 0.983 60.5%, 0.992 70.3%, 0.996 82.7%, 1);
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
	will-change: transform, box-shadow;
	position: relative;
	grid-column:1/-1;
	grid-row:1/-1;
	display:grid;
	grid-template-columns:subgrid;
	grid-template-rows:subgrid;
	transition: 1s cubic-bezier(0.8, -0.191, 0.5, 1);
	transform-origin: right;
	transform: rotateY(-50deg) rotateX(0deg) scale(1);
	/* transform: rotateY(0deg) rotateX(70deg) scale(1); */
	/* transform-origin: bottom; */
	margin-left: 6%;
 
	/* outline:solid rgb(45, 41, 41); */
  	/* transform: rotateY(-20deg) rotateX(45deg) scale(.6); */
  
  &:hover{
     transform: rotateY(0deg) rotateX(0deg)scale(1);
  }
}

/* use @scope to controle which div you want to target */
.mainG article:nth-of-type(n){
		--radius:3rem;

		position: relative;
  		display:grid;
	  	width:100%;
  		place-items:center;
  		font-size:3rem;
		border-radius: var(--radius);
		opacity: .3;
		filter: blur(2.5px) grayscale(10);
		z-index: 0;
		outline:solid lightslategrey;
	
		&:hover{
			opacity: 1;
			filter: blur(0);
			z-index: 3;
			box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.351);
		}

		&:not(:hover){
			transition: .5s ease-in-out;
			user-select: none
 		}
  
}

/* iframe styling */
.mainG article:is(:global(.mid_3,.top_2,.top_3)){
	display: none;
}

.mainG article:has(iframe) > a{
	position: absolute;
	inset: 0;
	z-index: 2;
	/* background-color: skyblue; */
}

.mainG article :is(iframe,img){
	border: none;
	transition: none;
	width: stretch;
	height: stretch;
	border-radius: var(--radius);
}

.mainG article.top_1{
	grid-column:1/4;
	grid-row:1/2;
}

.mainG article.top_1 iframe{
	position: absolute;
	inset: 0;
	border-radius: var(--radius);
}

.mainG article.mid_2{
	outline: none;
	box-shadow: none;
}

.mainG article.down_1 img{
	width: 100%;
	height: 100%;
}

.mainG article.down_2{
	border-radius: var(--radius);
	outline: none;
}

.mainG article.down_2 iframe{
	border-radius: var(--radius);
}

.mainG article.down_3{
	grid-column:3/-1;
	grid-row:2/-1;
}

.mainG article.down_3 iframe{
	position: absolute;
	border-radius: var(--radius);
}

/* .move{
  grid-column:side;
} */

/* HTML: <div class="stamp"></div> */
.stamp {
  	--r: 15px; /* control the radius */
	width: 100%;
  	height: 100%;
  	border-radius: 50px;
	corner-shape: superellipse(-2);

  	padding: calc(2*var(--r));
  	background: rgba(91, 154, 216, 0.61);
  	/* outline: solid #b3b39cb8; */
  mask: 
    radial-gradient(var(--r),#0000 97%,#000) round 
     calc(-1.5*var(--r)) calc(-1.5*var(--r))/calc(3*var(--r)) calc(3*var(--r)), 
    linear-gradient(#000 0 0) no-repeat 50%/calc(100% - 3*var(--r)) calc(100% - 3*var(--r));
}


/* grid controls */
 #cover-3:has(:global(.top:hover,:focus-within)){
      
  	&:has(:global(.top_1:hover,:focus)){
		--_bg: hsl(54, 72%, 81%);
		background-color: var(--_bg);
		color: var(--_bg);
      grid-template-columns:5fr 1fr 3fr;
      grid-template-rows:5fr 1fr 1fr;
	   &::after{
			content: 'Merlin';
			color: hsl(54, 83%, 47%);
		}
     }
   	&:has(:global(.top_2:hover)){
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
				--_bg:hsl(67, 34%, 71%);
				background-color: var(--_bg);
				color: var(--_bg);
       		grid-template-columns:2.5fr 1fr 1fr;
       		grid-template-rows: 1fr 2.5fr 1fr;
				&::after{
					content: 'A11y tool';
					color: inherit;
				}	
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
       		--_bg:hsl(240, 1%, 24%);
				background-color: var(--_bg);
				color: var(--_bg);
       		grid-template-columns: 1fr 2.5fr 1fr;
				grid-template-rows: 1fr  1fr 8fr;
				&::after{
					content: 'Shaders';
					color: inherit;
				}
     }
   		&:has(:global(.down_3:hover,:focus-within)){
				--_bg:hsl(216, 98%, 61%);
				background-color: var(--_bg);
				color: var(--_bg);
       		grid-template-columns: 1fr  1fr 2.5fr;
				grid-template-rows: 1fr  1fr 2.5fr;
				&::after{
					content: 'windows xp';
					color: inherit;
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
      & > div{
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
	grid-template-columns: 1fr 1fr 3fr 1fr ;
	grid-template-rows: 1fr 1fr 1fr ;
}

#cover-5::after{
	font-size: 9rem;
	filter: blur(1px);
}

#cover-5 a{
	display: grid;
	grid-template-columns: subgrid;
	grid-template-rows: subgrid;
	grid-column: 1/-2;
	grid-row: 1/4;
	height: 100%;
	/* border: yellow solid; */
	
}

#cover-5 ul{
	grid-row: 2 / span 1;
	grid-column: 4 / span 2;
	display: flex;
	flex-direction: column;
	place-self: center;
	place-content:end ;
	align-items: end;
	transform-origin: right;
	color: #ffffffc1;
	/* border: blue solid; */
	width: 100%;
	padding-right: 30%;

	a{
		color: whitesmoke;
		text-transform: capitalize;
	}


	a:hover{
		color: var(--link-color);}
}

#cover-5 div{
	width: 100%;
	height: 100%;
	grid-column: 3/span 1 ;
	grid-row: 2/-1;
	display: flex;
	flex-wrap: wrap;
	overflow-wrap: break-word;
	border: red solid;
	display: none;
}

#cover-5 div:has(:global(p)){
	/* mix-blend-mode:multiply; */
	/* font-size:clamp(5rem,19vw,10rem); */
	/* outline: solid red; */

}


</style>