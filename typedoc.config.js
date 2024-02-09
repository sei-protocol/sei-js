module.exports = {
    entryPoints: ["packages/core", "packages/react"],
    name: "SeiJS",
    entryPointStrategy: "packages",
    includeVersion: false,
    
    // Enable the typedoc-plugin-pages plugin
    pluginPages: {
        pages: [
            {
                name: "Javascript Examples",
                source: "./EXAMPLES.md"
            },
        ],
        source: "./"
    }

    // Potentially useful for debugging
    // logLevel: "Verbose"
}