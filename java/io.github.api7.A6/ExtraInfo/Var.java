// automatically generated by the FlatBuffers compiler, do not modify

package io.github.api7.A6.ExtraInfo;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class Var extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_2_0_0(); }
  public static Var getRootAsVar(ByteBuffer _bb) { return getRootAsVar(_bb, new Var()); }
  public static Var getRootAsVar(ByteBuffer _bb, Var obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public Var __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public String name() { int o = __offset(4); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer nameAsByteBuffer() { return __vector_as_bytebuffer(4, 1); }
  public ByteBuffer nameInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 4, 1); }

  public static int createVar(FlatBufferBuilder builder,
      int nameOffset) {
    builder.startTable(1);
    Var.addName(builder, nameOffset);
    return Var.endVar(builder);
  }

  public static void startVar(FlatBufferBuilder builder) { builder.startTable(1); }
  public static void addName(FlatBufferBuilder builder, int nameOffset) { builder.addOffset(0, nameOffset, 0); }
  public static int endVar(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public Var get(int j) { return get(new Var(), j); }
    public Var get(Var obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

