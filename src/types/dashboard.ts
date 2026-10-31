export type ChartType = "LINE" | "AREA" | "BAR" | "GAUGE" | "STAT";

export interface GridPos {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface WidgetRead {
  id: string;
  page_id: string;
  host_id: string;
  title: string;
  chart_type: ChartType;
  collector: string;
  metric_item: string;
  grid_pos: GridPos;
}

export interface WidgetCreate {
  title: string;
  chart_type: ChartType;
  collector: string;
  metric_item: string;
  host_id: string;
  grid_pos?: GridPos;
}

export interface WidgetUpdate {
  title?: string;
  chart_type?: ChartType;
  collector?: string;
  metric_item?: string;
  host_id?: string;
  grid_pos?: GridPos;
}

export interface PageRead {
  id: string;
  user_id: string;
  name: string;
  description: string;
  widgets: WidgetRead[];
}

export interface PageCreate {
  name: string;
  description: string;
}

export interface PageUpdate {
  name?: string;
  description?: string;
}
