<script>
	import '../app.css';
	import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import {
		HomeSolid,
		QuestionCircleSolid,
		ShoppingBagSolid,
		AddressBookSolid
	} from 'flowbite-svelte-icons';
	let { children } = $props();
</script>

<Navbar>
	<NavHamburger />
	<NavUl>
		<NavLi><DarkMode /></NavLi>
		<NavLi href="/"><HomeSolid /></NavLi>
		<NavLi href="/about"><QuestionCircleSolid /></NavLi>
		<NavLi href="/pricing"><ShoppingBagSolid /></NavLi>
		<NavLi href="/contact"><AddressBookSolid /></NavLi>
	</NavUl>
</Navbar>

{@render children()}
