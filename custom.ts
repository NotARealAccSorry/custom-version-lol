namespace assets{
    //% helper=getImageByName
    //% pyConvertToTaggedTemplate
    //% blockIdentity="images._spriteImage"
    export function image(lits: any, ...args: any[]): Image { return null }

    //% helper=getTileByName
    //% pyConvertToTaggedTemplate
    //% blockIdentity="images._tile"
    export function tile(lits: any, ...args: any[]): Image { return null }

    //% helper=getAnimationByName
    //% pyConvertToTaggedTemplate
    //% blockIdentity="animation._animationFrames"
    export function animation(lits: any, ...args: any[]): Image[] { return null }

    //% helper=getSongByName
    //% pyConvertToTaggedTemplate
    //% blockIdentity="music._songFieldEditor"
    export function song(lits: any, ...args: any[]): Buffer { return null }
}

namespace helpers {
    export type ImageFactory = (name: string) => Image;
    export type TileFactory = (name: string) => Image;
    export type AnimationFactory = (name: string) => Image[];
    export type SongFactory = (name: string) => Buffer;

    interface Factory {
        kind: string;
        factory: (name: string) => any;
    }

    let factories: Factory[];

    export function _registerFactory(kind: string, factory: (name: string) => any) {
        if (!factories) factories = [];
        factories.push({
            kind,
            factory
        });
    }

    export function _getFactoryInstance(kind: string, name: string) {
        if (factories) {
            for (const factory of factories) {
                if (factory.kind === kind) {
                    let data = factory.factory(name);
                    if (data) return data;
                }
            }
        }
        return null;
    }


    export function getTilemapByName(name: string) {
        return _getFactoryInstance("tilemap", name);
    }

    export function getImageByName(name: string) {
        return _getFactoryInstance("image", name);
    }

    export function getAnimationByName(name: string) {
        return _getFactoryInstance("animation", name);
    }

    export function getTileByName(name: string) {
        return _getFactoryInstance("tile", name);
    }

    export function getSongByName(name: string) {
        return _getFactoryInstance("song", name);
    }
}
