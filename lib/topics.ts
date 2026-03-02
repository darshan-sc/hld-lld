export type TopicType = 'oop' | 'lld';
export type TopicCategory =
  | 'foundations'
  | 'creational'
  | 'structural'
  | 'behavioral'
  | 'design-problem';

export type Topic = {
  order: number;
  phase: 1 | 2 | 3;
  type: TopicType;
  title: string;
  slug: string;
  summary: string;
  category: TopicCategory;
  patterns?: string[];
};

export const PHASE_META: Record<1 | 2 | 3, { title: string; blurb: string }> = {
  1: {
    title: 'Phase 1: OOP Foundations',
    blurb: 'Build language-agnostic object-oriented fundamentals.'
  },
  2: {
    title: 'Phase 2: Design Patterns',
    blurb: 'Master reusable LLD building blocks from GoF categories.'
  },
  3: {
    title: 'Phase 3: Design Problems',
    blurb: 'Apply patterns on interview-grade object design systems.'
  }
};

export const TOPICS: Topic[] = [
  {
    order: 1,
    phase: 1,
    type: 'oop',
    title: 'Classes & Objects',
    slug: 'classes-objects',
    summary: 'Fields, methods, constructors, and object identity.',
    category: 'foundations'
  },
  {
    order: 2,
    phase: 1,
    type: 'oop',
    title: 'Encapsulation',
    slug: 'encapsulation',
    summary: 'Information hiding with controlled object APIs.',
    category: 'foundations'
  },
  {
    order: 3,
    phase: 1,
    type: 'oop',
    title: 'Abstraction',
    slug: 'abstraction',
    summary: 'Expose what to do, hide how it is implemented.',
    category: 'foundations'
  },
  {
    order: 4,
    phase: 1,
    type: 'oop',
    title: 'Inheritance',
    slug: 'inheritance',
    summary: 'Reuse behavior with extension while preserving contracts.',
    category: 'foundations'
  },
  {
    order: 5,
    phase: 1,
    type: 'oop',
    title: 'Polymorphism',
    slug: 'polymorphism',
    summary: 'Swap implementations behind a shared interface.',
    category: 'foundations'
  },
  {
    order: 6,
    phase: 1,
    type: 'oop',
    title: 'Composition over Inheritance',
    slug: 'composition',
    summary: 'Prefer wiring capabilities over deep hierarchies.',
    category: 'foundations'
  },
  {
    order: 7,
    phase: 1,
    type: 'oop',
    title: 'SOLID Principles',
    slug: 'solid',
    summary: 'Five principles for maintainable object-oriented systems.',
    category: 'foundations'
  },
  {
    order: 8,
    phase: 2,
    type: 'lld',
    title: 'Singleton',
    slug: 'singleton',
    summary: 'Ensure exactly one instance with global access.',
    category: 'creational'
  },
  {
    order: 9,
    phase: 2,
    type: 'lld',
    title: 'Factory Method',
    slug: 'factory-method',
    summary: 'Defer object creation to subclasses or factories.',
    category: 'creational'
  },
  {
    order: 10,
    phase: 2,
    type: 'lld',
    title: 'Abstract Factory',
    slug: 'abstract-factory',
    summary: 'Create families of related products consistently.',
    category: 'creational'
  },
  {
    order: 11,
    phase: 2,
    type: 'lld',
    title: 'Builder',
    slug: 'builder',
    summary: 'Construct complex objects step-by-step.',
    category: 'creational'
  },
  {
    order: 12,
    phase: 2,
    type: 'lld',
    title: 'Prototype',
    slug: 'prototype',
    summary: 'Clone existing instances instead of rebuilding them.',
    category: 'creational'
  },
  {
    order: 13,
    phase: 2,
    type: 'lld',
    title: 'Adapter',
    slug: 'adapter',
    summary: 'Translate incompatible interfaces between components.',
    category: 'structural'
  },
  {
    order: 14,
    phase: 2,
    type: 'lld',
    title: 'Decorator',
    slug: 'decorator',
    summary: 'Attach behavior dynamically without subclassing.',
    category: 'structural'
  },
  {
    order: 15,
    phase: 2,
    type: 'lld',
    title: 'Facade',
    slug: 'facade',
    summary: 'Provide a simplified gateway to a complex subsystem.',
    category: 'structural'
  },
  {
    order: 16,
    phase: 2,
    type: 'lld',
    title: 'Composite',
    slug: 'composite',
    summary: 'Treat part-whole hierarchies with one interface.',
    category: 'structural'
  },
  {
    order: 17,
    phase: 2,
    type: 'lld',
    title: 'Proxy',
    slug: 'proxy',
    summary: 'Control access and lifecycle around another object.',
    category: 'structural'
  },
  {
    order: 18,
    phase: 2,
    type: 'lld',
    title: 'Observer',
    slug: 'observer',
    summary: 'Publish state changes to subscribers.',
    category: 'behavioral'
  },
  {
    order: 19,
    phase: 2,
    type: 'lld',
    title: 'Strategy',
    slug: 'strategy',
    summary: 'Encapsulate interchangeable algorithms.',
    category: 'behavioral'
  },
  {
    order: 20,
    phase: 2,
    type: 'lld',
    title: 'Command',
    slug: 'command',
    summary: 'Turn operations into objects for queueing and undo.',
    category: 'behavioral'
  },
  {
    order: 21,
    phase: 2,
    type: 'lld',
    title: 'Iterator',
    slug: 'iterator',
    summary: 'Traverse collections without exposing internals.',
    category: 'behavioral'
  },
  {
    order: 22,
    phase: 2,
    type: 'lld',
    title: 'State',
    slug: 'state',
    summary: 'Change behavior by delegating to state objects.',
    category: 'behavioral'
  },
  {
    order: 23,
    phase: 2,
    type: 'lld',
    title: 'Template Method',
    slug: 'template-method',
    summary: 'Fix algorithm flow while letting subclasses vary steps.',
    category: 'behavioral'
  },
  {
    order: 24,
    phase: 3,
    type: 'lld',
    title: 'Parking Lot',
    slug: 'parking-lot',
    summary: 'Gate, spot allocation, and pricing model design.',
    category: 'design-problem',
    patterns: ['Factory', 'Strategy', 'Singleton']
  },
  {
    order: 25,
    phase: 3,
    type: 'lld',
    title: 'Library Management System',
    slug: 'library',
    summary: 'Catalog, lending workflows, and availability states.',
    category: 'design-problem',
    patterns: ['Observer', 'Iterator', 'State']
  },
  {
    order: 26,
    phase: 3,
    type: 'lld',
    title: 'Elevator System',
    slug: 'elevator',
    summary: 'Scheduling, car state transitions, and dispatching.',
    category: 'design-problem',
    patterns: ['State', 'Strategy', 'Observer']
  },
  {
    order: 27,
    phase: 3,
    type: 'lld',
    title: 'Hotel Booking System',
    slug: 'hotel-booking',
    summary: 'Inventory, reservation workflow, and notifications.',
    category: 'design-problem',
    patterns: ['Factory', 'Builder', 'Observer']
  },
  {
    order: 28,
    phase: 3,
    type: 'lld',
    title: 'Chess Game',
    slug: 'chess',
    summary: 'Board model, move rules, and undo command stack.',
    category: 'design-problem',
    patterns: ['Composite', 'Command', 'Iterator']
  },
  {
    order: 29,
    phase: 3,
    type: 'lld',
    title: 'Ride-Sharing (Uber/Lyft)',
    slug: 'ride-sharing',
    summary: 'Driver matching, trip lifecycle, and live updates.',
    category: 'design-problem',
    patterns: ['Strategy', 'Observer', 'State']
  },
  {
    order: 30,
    phase: 3,
    type: 'lld',
    title: 'Splitwise',
    slug: 'splitwise',
    summary: 'Expense modeling and settlement strategy behavior.',
    category: 'design-problem',
    patterns: ['Strategy', 'Observer']
  },
  {
    order: 31,
    phase: 3,
    type: 'lld',
    title: 'Snake & Ladder',
    slug: 'snake-ladder',
    summary: 'Board traversal logic and deterministic game flow.',
    category: 'design-problem',
    patterns: ['Command', 'Composite']
  },
  {
    order: 32,
    phase: 3,
    type: 'lld',
    title: 'ATM Machine',
    slug: 'atm',
    summary: 'Transaction flow, states, and cash dispensing strategy.',
    category: 'design-problem',
    patterns: ['State', 'Facade', 'Strategy']
  },
  {
    order: 33,
    phase: 3,
    type: 'lld',
    title: 'Vending Machine',
    slug: 'vending-machine',
    summary: 'Finite-state transaction processing and inventory checks.',
    category: 'design-problem',
    patterns: ['State Machine']
  }
];

export const TOTAL_TOPICS = TOPICS.length;

const TOPIC_BY_TYPE_SLUG = new Map(TOPICS.map((topic) => [`${topic.type}:${topic.slug}`, topic]));
const TOPIC_BY_ORDER = new Map(TOPICS.map((topic) => [topic.order, topic]));

export function getTopic(type: TopicType, slug: string): Topic | undefined {
  return TOPIC_BY_TYPE_SLUG.get(`${type}:${slug}`);
}

export function getTopicByOrder(order: number): Topic | undefined {
  return TOPIC_BY_ORDER.get(order);
}

export function getPhaseTopics(phase: 1 | 2 | 3): Topic[] {
  return TOPICS.filter((topic) => topic.phase === phase);
}

export function getTopicsByType(type: TopicType): Topic[] {
  return TOPICS.filter((topic) => topic.type === type);
}

export function getAdjacentTopics(order: number): { prev?: Topic; next?: Topic } {
  return {
    prev: getTopicByOrder(order - 1),
    next: getTopicByOrder(order + 1)
  };
}

export function hrefForTopic(topic: Topic): string {
  return `/${topic.type}/${topic.slug}`;
}

export function completionPercent(totalDone: number, total = TOTAL_TOPICS): number {
  if (total <= 0) {
    return 0;
  }

  return Math.round((Math.max(0, Math.min(totalDone, total)) / total) * 100);
}
