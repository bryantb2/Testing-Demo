import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const container = createComponentFactory({
    component: AppComponent
  })

  beforeEach(() => {
    spectator = container();
  })

  it('Should be Created', () => {
    const { component } = spectator;
    expect(component).toBeTruthy();
  })

  it(`should have as title 'testing-demo'`, () => {
    const { component } = spectator;
    expect(component.title).toEqual('testing-demo');
  });

  it('should render title', () => {
    expect(spectator.query('.content span')?.textContent).toContain('testing-demo app is running!');
  });
});
