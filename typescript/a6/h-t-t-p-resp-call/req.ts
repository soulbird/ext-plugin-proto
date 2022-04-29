// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TextEntry } from '../../a6/text-entry';


export class Req {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):Req {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsReq(bb:flatbuffers.ByteBuffer, obj?:Req):Req {
  return (obj || new Req()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsReq(bb:flatbuffers.ByteBuffer, obj?:Req):Req {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Req()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

status():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

headers(index: number, obj?:TextEntry):TextEntry|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new TextEntry()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

headersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

confToken():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

static startReq(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
}

static addStatus(builder:flatbuffers.Builder, status:number) {
  builder.addFieldInt16(1, status, 0);
}

static addHeaders(builder:flatbuffers.Builder, headersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, headersOffset, 0);
}

static createHeadersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startHeadersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addConfToken(builder:flatbuffers.Builder, confToken:number) {
  builder.addFieldInt32(3, confToken, 0);
}

static endReq(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createReq(builder:flatbuffers.Builder, id:number, status:number, headersOffset:flatbuffers.Offset, confToken:number):flatbuffers.Offset {
  Req.startReq(builder);
  Req.addId(builder, id);
  Req.addStatus(builder, status);
  Req.addHeaders(builder, headersOffset);
  Req.addConfToken(builder, confToken);
  return Req.endReq(builder);
}
}
