import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { normalize } from 'path';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.

export function schematicExample(_options: any): Rule {

  const name = _options.name;

  console.log('Hello ' + name);
  
  return (tree: Tree, _context: SchematicContext) => {

    // Create main folder
    tree.create(normalize(`${name}/README.md`), '');

    // Create subfolders
    tree.create(normalize(`${name}/A/README.md`), '');
    tree.create(normalize(`${name}/B/README.md`), '');
    tree.create(normalize(`${name}/C/README.md`), '');
    tree.create(normalize(`${name}/D/README.md`), '');

    // Create subfolders of 'A' folder
    tree.create(normalize(`${name}/A/E/README.md`), '');
    tree.create(normalize(`${name}/A/F/README.md`), '');

    return tree;
  };
}