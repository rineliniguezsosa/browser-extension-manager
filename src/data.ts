import devLensLogo from './assets/images/logo-devlens.svg';
import styleSpyLogo from './assets/images/logo-style-spy.svg';
import speedBoostLogo from './assets/images/logo-speed-boost.svg';
import jsonWizardLogo from './assets/images/logo-json-wizard.svg';
import tabMasterProLogo from './assets/images/logo-tab-master-pro.svg'
import viewPortLogo from './assets/images/logo-viewport-buddy.svg'
import markUpNotes from './assets/images/logo-markup-notes.svg';
import gridGuidesLogo from './assets/images/logo-grid-guides.svg';
import palettePickerLogo from './assets/images/logo-palette-picker.svg';
import linkCheckerLogo from './assets/images/logo-link-checker.svg';
import domSnapshotLogo from './assets/images/logo-dom-snapshot.svg';
import consolePlusLogo from './assets/images/logo-console-plus.svg';

interface extensionProps {
    id:number,
    logo:string,
    name:string,
    description:string,
    isActive:boolean
}

export const data: extensionProps[] = [
    {
        id:0,
        logo: devLensLogo,
        name: "DevLens",
        description: "Quickly inspect page layouts and visualize element boundaries.",
        isActive: true
    },
    {   
        id:1,
        logo: styleSpyLogo,
        name: "StyleSpy",
        description: "Instantly analyze and copy CSS from any webpage element.",
        isActive: true
    },
    {
        id:2,
        logo: speedBoostLogo,
        name: "SpeedBoost",
        description: "Optimizes browser resource usage to accelerate page loading.",
        isActive: false
    },
    {
        id:3,
        logo: jsonWizardLogo,
        name: "JSONWizard",
        description: "Formats, validates, and prettifies JSON responses in-browser.",
        isActive: true
    },
    {
        id:4,
        logo: tabMasterProLogo,
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions.",
        isActive: true
    },
    {
        id:5,
        logo: viewPortLogo,
        name: "ViewportBuddy",
        description: "Simulates various screen resolutions directly within the browser.",
        isActive: false
    },
    {
        id:6,
        logo: markUpNotes,
        name: "Markup Notes",
        description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
        isActive: true
    },
    {
        id:7,
        logo: gridGuidesLogo,
        name: "GridGuides",
        description: "Overlay customizable grids and alignment guides on any webpage.",
        isActive: false
    },
    {
        id:8,
        logo: palettePickerLogo,
        name: "Palette Picker",
        description: "Instantly extracts color palettes from any webpage.",
        isActive: true
    },
    {
        id:9,
        logo: linkCheckerLogo,
        name: "LinkChecker",
        description: "Scans and highlights broken links on any page.",
        isActive: true
    },
    {
        id:10,
        logo: domSnapshotLogo,
        name: "DOM Snapshot",
        description: "Capture and export DOM structures quickly.",
        isActive: false
    },
    {   
        id:11,
        logo: consolePlusLogo,
        name: "ConsolePlus",
        description: "Enhanced developer console with advanced filtering and logging.",
        isActive: true
    }
  ]