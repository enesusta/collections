import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs'

const creator = (name, isES6) => {
    return {
        input: `src/${name}/index.js`,
        output: [
            {
                dir: isES6 ? name : `${name}/cjs`,
                format: isES6 ? 'es' : 'cjs'
            }
        ],
        plugins: [
            isES6 ? commonjs() : null,
            terser()
        ]
    }
};

export default creator;