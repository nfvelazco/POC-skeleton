import Home from '../containers/home';
import Text from '../containers/text';

class route{
    constructor(path, label,component) {
        this.PATH = path;
        this.LABEL = label;
        this.COMPONENT = component;
      }
}

const HOME_PATH = '/';
const HOME_LABEL = 'Home';

const TEXT_PATH = '/text';
const TEXT_LABEL = 'Blog';

//SI NECESITA MANEJAR UN CONTAINER POR DEFAULT AQUI TIENE UN EJEMPLO
// const DEFAULT_PATH = TEXT_PATH;
// const DEFAULT_LABEL = TEXT_LABEL;
// const DEFAULT_COMPONENT = Text;

// const DEFAULT = new route(DEFAULT_PATH, DEFAULT_LABEL,DEFAULT_COMPONENT);

const HOME = new route(HOME_PATH, HOME_LABEL, Home);
const TEXT = new route(TEXT_PATH, TEXT_LABEL, Text);

export const ROUTES = [
    HOME,
    TEXT
]