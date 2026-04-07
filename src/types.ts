/**
 * An asset described as path to it.
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Types
 */
type Asset = string;

/**
 * An `Array` that describes the source and destination paths for the asset.
 *
 * @remarks
 * The first item of the `Array` is the source path and relative to `process.cwd`. The second `Array` item is the destination path, that is relative to Rolldown's output directory.
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Types
 */
type AssetDirection = [string, string];

/**
 * Options for the plugin. See {@link Asset} and {@link AssetDirection} for more details.
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Types
 */
type Options = Array<Asset | AssetDirection>;

export type { Asset, AssetDirection, Options };
