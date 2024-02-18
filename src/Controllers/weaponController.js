import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const weaponSchema = z.object({
    name: z.string(),
    type_of_damage: z.string(),
    mana_usage: z.boolean(),
    weapon_type: z.string()
});


export const getFilteredWeapons = async (req, res) => {
    try {
        const { type_of_damage } = req.query;

        let filteredWeapons;

        if (type_of_damage) {
            filteredWeapons = await prisma.weapon.findMany({
                where: {
                    type_of_damage: type_of_damage,
                },
            });
        } else {
            filteredWeapons = await prisma.weapon.findMany();
        }
        return res.status(200).json(filteredWeapons);
    } catch (error) {
        console.error('Error filtering weapons:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};



export const getWeaponById = async function(req, res) {
    const weaponId = req.params.id;
    try {
        const weapon = await prisma.weapon.findUnique({
            where: {
                id: weaponId,
            },
        });
        if (!weapon) {
            res.status(404).json({ error: 'Weapon not found' });
        } else {
            res.status(200).json(weapon);
        }
    } catch (error) {
        res.status(500).json({ error: 'error' });
    }
}

export const createWeapon = async (req, res) => {
    try {
        const { name, type_of_damage, mana_usage, weapon_type } = weaponSchema.parse(req.body);
        const newWeapon = await prisma.weapon.create({
            data: {
                name,
                type_of_damage,
                mana_usage,
                weapon_type
            }
        });
        return res.status(201).json(newWeapon);
    } catch (error) {
        console.error('Error creating weapon:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const updateWeapon = async function(req, res) {
    const weaponId = req.params.id;
    try {
        const weapon = await weaponSchema.parse(req.body);
        const updatedWeapon = await prisma.weapon.update({
            where: {
                id: weaponId,
            },
            data: weapon,
        });
        res.status(200).json(updatedWeapon);
    } catch (error) {
        console.error('Error updating weapon:', error);
        res.status(400).json({ error: 'Bad Request' });
    }
}

export const deleteWeapon = async function(req, res) {
    const weaponId = req.params.id;
    try {
        await prisma.weapon.delete({
            where: {
                id: weaponId,
            },
        });
        res.status(200).json({ message: 'Weapon deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting weapon:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


