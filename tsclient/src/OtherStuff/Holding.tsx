import Data, {upgrade} from "./Util";

class pie {
    static chips: Data = new Data("Chips", {
        trans: (val:number) => Math.round((20 + val) * 15),
        chips: (val:number) =>  Math.round((1 + val) * 10),
         boards: (val:number) =>  Math.round((5 + val ) * 15),
        cpus: (val:number) => Math.round((1 + val) * 1.1)
    });

    static boards: Data = new Data("Boards", {
        trans: (val:number) => val,
        chips: (val:number) => val
      , boards: (val:number) => val
        , cpus: () => 0,
    });

    static trans: Data = new Data("Transistor", {
        trans: (val:number) => Math.round((20 + val) * 15),
        chips: () => 0
        , boards: () => 0
        , cpus: () => 0

    });

    static cpus: Data = new Data("Cpus", {
        trans: (val:number) => val,
        chips: (val:number) => val
        , boards: (val:number) => val
        , cpus: (val:number) => val,
    });

    static robot: Data = new upgrade("Robot", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    })

    static fortyTwo: Data = new upgrade("42", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    })

    static rowboat: Data = new upgrade("RowBoat", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    })

    static phonebox: Data = new upgrade("Phone Box", {
        chips: () => {
        }, boards: () => {
        }, cpus: () => {
        }
    })


}

export default pie