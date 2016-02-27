// 2 A. Configure SystemJS
System.config({
	transpiler: 'typescript',
	typescriptOptions: { emitDecoratorMetadata: true },
	packages: {'app': {defaultExtension: 'ts'}}
});
// 2 B. Our code gets imported here
System.import('app/main')
	.then(null, console.error.bind(console));
