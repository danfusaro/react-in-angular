import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  template,
  mergeWith,
} from "@angular-devkit/schematics";
import { ReactWrapperSchematics } from "./schema";
import { strings } from "@angular-devkit/core";
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function reactWrapper(options: ReactWrapperSchematics): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const sourceTemplates = url("/.files");

    const sourceParameterizedTemplates = apply(sourceTemplates, [
      template({
        ...options,
        ...strings,
      }),
    ]);
    return mergeWith(sourceParameterizedTemplates)(tree, context);
  };
}
