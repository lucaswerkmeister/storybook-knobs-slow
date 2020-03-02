import { addDecorator, storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

addDecorator( withKnobs );

storiesOf('test', module)
	.add('test', () => ({
		template: `<div>
			<label>
				<input type="checkbox" v-model="plain">
				Plain checkbox
			</label>
			<p>
				The plain checkbox is {{ plain }}.
				The knob is {{ knob }}.
			</p>
		</div>`,
		data: () => ({ plain: true }),
		props: { knob: { default: boolean('Knob', true) } },
	}));
