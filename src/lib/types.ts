// Type/interface to hold "subsite" information: url, name, description, and optional group
export interface Site {
    url: string;
    name: string;
    description: string;
    place?: number;
    group?: string; // Optional grouping for organizing sites (e.g., "portfolio", "tools", "projects")
    icon?: string; // Optional FontAwesome icon class
}
