// @vitest-environment nuxt
import {mountSuspended, renderSuspended} from '@nuxt/test-utils/runtime';
import FooterBar from '~/components/layout/footer-bar.vue';
import {screen} from '@testing-library/vue';
import {setup} from '@nuxt/test-utils/e2e';
import {describe, it, expect, test} from 'vitest';
import App from '~/app.vue';

describe('login page', async () => {
  await setup({
    host: 'http://localhost:3001'
  });

  test('toMatchInlineSnapshot', async () => {
    const component = await mountSuspended(FooterBar);
    expect(component.text()).toMatchInlineSnapshot('"footer-bar"');
  });

  it('getByText toBeDefined', async () => {
    await renderSuspended(FooterBar);
    expect(screen.getByText('footer-bar')).toBeDefined();
  });

  it('can also render an app', async () => {
    const html = await renderSuspended(App, {route: '/album/list'});
    expect(html.getByText('ALBUM LIST')).toBeDefined();
  });
});
