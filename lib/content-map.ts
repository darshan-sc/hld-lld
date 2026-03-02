import type { MDXProps } from 'mdx/types';
import type { ComponentType } from 'react';

import type { TopicType } from '@/lib/topics';

type MdxModule = {
  default: ComponentType<MDXProps>;
};

type Loader = () => Promise<MdxModule>;

const oopContent: Record<string, Loader> = {
  'classes-objects': () => import('@/content/oop/classes-objects.mdx'),
  encapsulation: () => import('@/content/oop/encapsulation.mdx'),
  abstraction: () => import('@/content/oop/abstraction.mdx'),
  inheritance: () => import('@/content/oop/inheritance.mdx'),
  polymorphism: () => import('@/content/oop/polymorphism.mdx'),
  composition: () => import('@/content/oop/composition.mdx'),
  solid: () => import('@/content/oop/solid.mdx')
};

const lldContent: Record<string, Loader> = {
  singleton: () => import('@/content/lld/singleton.mdx'),
  'factory-method': () => import('@/content/lld/factory-method.mdx'),
  'abstract-factory': () => import('@/content/lld/abstract-factory.mdx'),
  builder: () => import('@/content/lld/builder.mdx'),
  prototype: () => import('@/content/lld/prototype.mdx'),
  adapter: () => import('@/content/lld/adapter.mdx'),
  decorator: () => import('@/content/lld/decorator.mdx'),
  facade: () => import('@/content/lld/facade.mdx'),
  composite: () => import('@/content/lld/composite.mdx'),
  proxy: () => import('@/content/lld/proxy.mdx'),
  observer: () => import('@/content/lld/observer.mdx'),
  strategy: () => import('@/content/lld/strategy.mdx'),
  command: () => import('@/content/lld/command.mdx'),
  iterator: () => import('@/content/lld/iterator.mdx'),
  state: () => import('@/content/lld/state.mdx'),
  'template-method': () => import('@/content/lld/template-method.mdx'),
  'parking-lot': () => import('@/content/lld/parking-lot.mdx'),
  library: () => import('@/content/lld/library.mdx'),
  elevator: () => import('@/content/lld/elevator.mdx'),
  'hotel-booking': () => import('@/content/lld/hotel-booking.mdx'),
  chess: () => import('@/content/lld/chess.mdx'),
  'ride-sharing': () => import('@/content/lld/ride-sharing.mdx'),
  splitwise: () => import('@/content/lld/splitwise.mdx'),
  'snake-ladder': () => import('@/content/lld/snake-ladder.mdx'),
  atm: () => import('@/content/lld/atm.mdx'),
  'vending-machine': () => import('@/content/lld/vending-machine.mdx')
};

export async function loadTopicMdx(type: TopicType, slug: string): Promise<MdxModule | null> {
  const map = type === 'oop' ? oopContent : lldContent;
  const loader = map[slug];

  if (!loader) {
    return null;
  }

  return loader();
}
