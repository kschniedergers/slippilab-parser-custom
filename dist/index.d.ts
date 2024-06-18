export interface GameStartEvent {
    isTeams: boolean;
    playerSettings: PlayerSettings[];
    replayFormatVersion: string;
    stageId: number;
}
export interface PlayerSettings {
    playerIndex: number;
    port: number;
    externalCharacterId: number;
    playerType: number;
    startStocks: number;
    costumeIndex: number;
    teamShade: number;
    handicap: number;
    teamId: number;
    playerBitfield: number;
    cpuLevel: number;
    offenseRatio: number;
    defenseRatio: number;
    modelScale: number;
    controllerFix: 'None' | 'UCF' | 'Dween' | 'Mixed';
    nametag: string;
    displayName: string;
    connectCode: string;
}
export interface PreFrameUpdateEvent {
    frameNumber: number;
    playerIndex: number;
    isFollower: boolean;
    actionStateId: number;
    xPosition: number;
    yPosition: number;
    facingDirection: number;
    joystickX: number;
    joystickY: number;
    cStickX: number;
    cStickY: number;
    trigger: number;
    processedButtons: number;
    physicalButtons: number;
    physicalLTrigger: number;
    physicalRTrigger: number;
    percent: number;
}
export interface PostFrameUpdateEvent {
    frameNumber: number;
    playerIndex: number;
    isFollower: boolean;
    internalCharacterId: number;
    actionStateId: number;
    xPosition: number;
    yPosition: number;
    facingDirection: number;
    percent: number;
    shieldSize: number;
    lastHittingAttackId: number;
    currentComboCount: number;
    lastHitBy: number;
    stocksRemaining: number;
    actionStateFrameCounter: number;
    isGrounded: boolean;
    lastGroundId: number;
    jumpsRemaining: number;
    lCancelStatus: number;
    hurtboxCollisionState: number;
    selfInducedAirXSpeed: number;
    selfInducedAirYSpeed: number;
    attackBasedXSpeed: number;
    attackBasedYSpeed: number;
    selfInducedGroundXSpeed: number;
    hitlagRemaining: number;
}
export interface GameEndEvent {
    gameEndMethod: number;
    quitInitiator: number;
}
export interface FrameStartEvent {
    frameNumber: number;
    randomSeed: number;
}
export interface ItemUpdateEvent {
    frameNumber: number;
    typeId: number;
    state: number;
    facingDirection: number;
    xVelocity: number;
    yVelocity: number;
    xPosition: number;
    yPosition: number;
    damageTaken: number;
    expirationTimer: number;
    spawnId: number;
    samusMissileType: number;
    peachTurnipFace: number;
    owner: number;
}
export interface FrameBookendEvent {
    frameNumber: number;
    latestFinalizedFrame: number;
}
export interface Frame {
    frameNumber: number;
    start: FrameStartEvent;
    end: FrameBookendEvent;
    players: {
        pre: PreFrameUpdateEvent[];
        post: PostFrameUpdateEvent[];
    }[];
    items: ItemUpdateEvent[];
}
export declare class Game {
    metadata: any;
    gameStart: GameStartEvent;
    gameEnd: GameEndEvent;
    frames: Frame[];
    private formatVersion;
    private raw;
    constructor(fileBuffer: ArrayBuffer);
    private initFrameIfNeeded;
    private initPlayerIfNeeded;
    private parseEventPayloadsEvent;
    private parseGameStartEvent;
    private parseFrameStartEvent;
    private parsePreFrameUpdateEvent;
    private parsePostFrameUpdateEvent;
    private parseItemUpdateEvent;
    private parseFrameBookendEvent;
    private parseGameEndEvent;
    private getUint;
    private getFloat;
    private getInt;
    private readShiftJisString;
}
