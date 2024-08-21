export interface Tag {
  name: string;
  class: string;
  icon: (_props: Record<string, any>) => JSX.Element;
}
