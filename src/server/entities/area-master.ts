import { Column, Entity, Index } from 'typeorm';

@Index('area_master_pkc', ['id'], { unique: true })
@Index('area_master_ix1', ['name'], { unique: true })
@Entity('area_master', { schema: 'public' })
export class AreaMaster {
  @Column('integer', { primary: true, name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', unique: true })
  name: string;

  @Column('character varying', {
    name: 'created_by',
  })
  createdBy: string;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('character varying', {
    name: 'updated_by',
  })
  updatedBy: string;

  @Column('timestamp without time zone', {
    name: 'updated_at',
    default: () => 'now()',
  })
  updatedAt: Date;
}
