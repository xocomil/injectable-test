import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ClassicInjectableService } from '../../services/classic-injectable.service';
import { NonInjectableService } from '../../services/non-injectable.service';

@Component({
  selector: 'injectable-test-lazy-component',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
      <strong>Non-injectable message:</strong> {{ nonInjectableMessage }}
    </div>
    <div>
      <strong>Classic Injectable message:</strong>
      {{ classicInjectableMessage }}
    </div> `,
  styleUrls: ['./lazy-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NonInjectableService, ClassicInjectableService],
})
export class LazyComponentComponent {
  protected readonly nonInjectableMessage =
    inject(NonInjectableService).getMessage();
  protected readonly classicInjectableMessage = inject(
    ClassicInjectableService
  ).getMessage();
}
