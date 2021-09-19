onEvent("ponder.registry", event => {
    event.create("charcoal_pit:main_bloomery", ["charcoal_pit:sandy_tuyere", "charcoal_pit:main_bloomery", "charcoal_pit:sandy_brick"])
        .tag("the_winter_rescue:bloomery")
        .scene("basic_usage", "1", "kubejs:bloomery", (scene, util) => {
            var pos = util.grid().at(2, 0, 2)
            scene.showBasePlate()
            scene.idle(20)
            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.idle(40)
            scene.world().showSection(util.select().layer(2), Facing.down)
            scene.idle(40)
            scene.overlay().showText(60)
                .text("2")
                .pointAt(util.vector().centerOf(pos))
            scene.world().showSection(util.select().layer(3), Facing.down)
            scene.idle(60)
        })

    event.create("frostedheart:generator_core_t1", ["frostedheart:generator_core_t1", "frostedheart:generator_amplifier_r1", "frostedheart:generator_brick"])
        .tag("the_winter_rescue:generator")
        .scene("basic_usage", "", "kubejs:generator", (scene, util) => {
            var pos = util.grid().at(1, 2, 0)
            scene.showBasePlate()
            scene.idle(20)
            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.idle(40)
            scene.world().showSection(util.select().layer(2), Facing.down)
            scene.idle(40)
            scene.world().showSection(util.select().layer(3), Facing.down)
            scene.idle(40)
            scene.world().showSection(util.select().layer(4), Facing.down)
            scene.idle(40)
            scene.overlay().showText(60)
                .text("")
                .pointAt(util.vector().centerOf(pos))
            scene.idle(60)
        })

    event.create("frostedheart:burning_chamber_core", ["frostedheart:burning_chamber", "frostedheart:burning_chamber_core", "rankine:high_refractory_bricks"])
        .tag("the_winter_rescue:crucible")
        .scene("basic_usage", "", "kubejs:crucible", (scene, util) => {
            var pos = util.grid().at(1, 2, 0)
            scene.showBasePlate()
            scene.idle(20)
            scene.world().showSection(util.select().layer(1), Facing.down)
            scene.idle(40)
            scene.world().showSection(util.select().layer(2), Facing.down)
            scene.idle(40)
            scene.world().showSection(util.select().layer(3), Facing.down)
            scene.idle(40)
            scene.world().showSection(util.select().layer(4), Facing.down)
            scene.idle(40)
            scene.overlay().showText(60)
                .text("")
                .pointAt(util.vector().centerOf(pos))
            scene.idle(60)
        })
})