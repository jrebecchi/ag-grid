// the line below is automatically modified during releases - do not modify
// (see scripts/release/updateChartModel.js)
export const CURRENT_VERSION = "27.3.0";
export function upgradeChartModel(model) {
    if (model.version == null) {
        // First release with version field.
        model.version = "27.1.0";
    }
    const { major, minor, patch } = versionParts(model.version);
    // TODO: Add some transforms as the model changes over time.
    // if (major < 28) {
    //     model = migrateToV28Model(model);
    // }
    return model;
}
function versionParts(version) {
    const split = typeof version === 'string' ?
        version.split('.').map(v => Number(v)) :
        [];
    if (split.length !== 3 || split.some((v) => isNaN(v))) {
        throw new Error('AG Grid - Illegal version string: ' + version);
    }
    return {
        major: split[0],
        minor: split[1],
        patch: split[2],
    };
}
//# sourceMappingURL=chartModelMigration.js.map