<script>
	import { Accordion, AccordionItem, Badge } from 'flowbite-svelte';
</script>

<Accordion>
	<AccordionItem>
		<span slot="header"
			>Camera One
			<Badge
				class="text-base-50 dark:text-base-300 bg-green-50 px-2.5 py-0.5 dark:bg-green-300"
				rounded-sm>Connected</Badge
			>
		</span>
		<p>// TODO: edit contents</p>
	</AccordionItem>
	<AccordionItem>
		<span slot="header"
			>Camera Two
			<Badge
				class="text-base-50 dark:text-base-300 bg-red-50 px-2.5 py-0.5 dark:bg-red-300"
				rounded-sm>Failed to Connect</Badge
			>
		</span>
		<p>// TODO: edit contents</p>
	</AccordionItem>
	<AccordionItem>
		<span slot="header"
			>Camera Three
			<Badge
				class="text-base-50 dark:text-base-300 bg-yellow-50 px-2.5 py-0.5 dark:bg-yellow-300"
				rounded-sm>Connecting</Badge
			>
		</span>
		<p>// TODO: edit contents</p>
	</AccordionItem>
</Accordion>
